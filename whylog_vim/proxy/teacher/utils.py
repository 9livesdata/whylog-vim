from functools import partial

from whylog import FrontInput
from whylog_vim.input_reader.teacher_reader import TeacherReader
from whylog_vim.output_formater.teacher_formater.input_windows_messages import InputMessages


class MenuHandler(object):
    def edit_line_content(self, parser):
        output = InputMessages.get_edit_line_message(parser.line_content)
        is_effect = self.rule.effect_id == parser.line_id
        self.main_proxy.create_input_window(output.get_content())
        self.read_function = partial(self.back_after_edit_line_content, parser, is_effect)

    def back_after_edit_line_content(self, parser, is_effect):
        content = TeacherReader.read_single_line(self.editor.get_input_content())
        if content:
            front_input = FrontInput(None, content, None)
            self.teacher.add_line(parser.line_id, front_input, is_effect)
            return True
        return False

    def edit_regex(self, parser):
        output = InputMessages.get_edit_regex_message(parser.line_content, parser.pattern)
        self.main_proxy.create_input_window(output.get_content())
        self.read_function = partial(self.back_after_edit_regex, parser)

    def back_after_edit_regex(self, parser):
        content = TeacherReader.read_single_line(self.editor.get_input_content())
        if content:
            self.teacher.update_pattern(parser.line_id, content)
            return True
        return False

    def delete_parser(self, parser):
        pass
