try:
    import vim.error
except:
    import vim
    class error(Exception):
        pass
    vim.error = error

import six

from whylog_vim.consts import EditorStates, Messages
from whylog_vim.output_formater.teacher_formater import TeacherFormater
from whylog_vim.proxy.teacher.utils import get_next_parser_id


class TeacherProxy(object):
    def __init__(self, teacher, editor, main_proxy):
        self.teacher = teacher
        self.editor = editor
        self.main_proxy = main_proxy

    def new_lesson(self):
        front_input = self.editor.get_front_input()
        self.teacher.add_line(get_next_parser_id(), front_input, effect=True)
        self.origin_file_name = self.editor.get_current_filename()
        six.print_(Messages.ADDED_EFFECT)

    def add_cause(self):
        front_input = self.editor.get_front_input()
        self.teacher.add_line(get_next_parser_id(), front_input)
        self.editor.create_teacher_window()
        self.print_teacher()

    def handle_menu_signal(self):
        self._set_cursor_position()
        self.output.call_button(self.editor.get_line_number())
        if self.main_proxy.get_state() == EditorStates.TEACHER:
            self._return_cursor_to_position()

    def read_input(self):
        if self.read_function():
            self.editor.create_teacher_window()
            self.performer.print_teacher()
            self._return_cursor_to_position()

    def print_teacher(self):
        self.raw_rule = self.teacher.get_rule()
        self.output = TeacherFormater.format_rule(self.raw_rule, None)
        # here should be the result from validate method of Teacher
        self.editor.set_teacher_output(self.output.get_content())
        self.editor.set_syntax_folding()
        self.main_proxy.set_state(EditorStates.TEACHER)

    def _set_cursor_position(self):
        self._return_offset = self.editor.get_offset()

    def _return_cursor_to_position(self):
        try:
            self.editor.go_to_offset(self._return_offset)
        except vim.error:
            raise CannotGoToPosition(self._return_offset)
        self.editor.open_fold()
