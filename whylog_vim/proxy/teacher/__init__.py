try:
    import vim.error
except:
    import vim

    class error(Exception):
        pass

    vim.error = error

from functools import partial
from itertools import count
import six

from whylog_vim.consts import EditorStates, Messages
from whylog_vim.output_formater.teacher_formater import TeacherFormater
from whylog_vim.proxy.teacher.utils import MenuHandler
from whylog_vim.proxy.teacher.exceptions import CannotGoToPosition


class TeacherProxy(MenuHandler):
    """
    This class is responsible give messages from vim to
    Teacher in whylog module. This class inherit from MenuHandler
    which provides functions for actions for the menu of the
    Teacher.
    TeacherProxy asks Teacher for rule intent and uses it for
    creating for users menu.
    """
    def __init__(self, teacher, config, editor, main_proxy):
        self.teacher = teacher
        self.config = config
        self.editor = editor
        self.main_proxy = main_proxy
        self.formater = TeacherFormater(self)
        self.get_next_parser_id = partial(next, count(0))
        self.get_next_constraints_id = partial(next, count(0))

    def _add_line(self, front_input, effect=False):
        id = self.get_next_parser_id()
        self.teacher.add_line(id, front_input, effect)
        self.teacher.set_log_type(id, self.main_proxy.log_types[front_input.line_source].name)

    def new_lesson(self):
        """
        This function will be call to create new lesson to Teacher.
        """
        front_input = self.editor.get_front_input()
        self._add_line(front_input, effect=True)
        self.origin_file_name = self.editor.get_current_filename()
        six.print_(Messages.ADDED_EFFECT)

    def add_cause(self):
        """
        This function will be called when user is in logs file after
        adding effect and wants to add both first or other cause.
        """
        front_input = self.editor.get_front_input()
        self._add_line(front_input)
        self.print_teacher()

    def handle_menu_signal(self):
        """
        This function is called when user takes the action on Teachers menu.
        """
        self._set_cursor_position()
        self.output.call_button(self.editor.get_line_number())
        if self.main_proxy.get_state() == EditorStates.TEACHER:
            self._return_cursor_to_position()

    def read_input(self):
        """
        This function is called when Input or Case window are opened.
        Its read the input of the window by setted before as an attibute
        function called read_funciton.
        """
        if self.read_function():
            self.print_teacher()
            self._return_cursor_to_position()

    def print_teacher(self):
        """
        This function asks teacher for the rule intent and uses it for
        create new teacher window with formatted rule intent as an
        content
        """
        self.rule = self.teacher.get_rule()
        self.output = self.formater.format_rule(self.rule, None)
        self.editor.create_teacher_window(self.output.get_content())
        self.editor.set_syntax_folding()
        self.main_proxy.set_state(EditorStates.TEACHER)

    def _set_cursor_position(self):
        self._return_offset = self.editor.get_line_offset()

    def _return_cursor_to_position(self):
        try:
            self.editor.go_to_offset(self._return_offset)
        except vim.error:
            raise CannotGoToPosition(self._return_offset)
        try:
            self.editor.open_fold()
        except Exception:
            # tryied to open fold but cannot.
            pass
