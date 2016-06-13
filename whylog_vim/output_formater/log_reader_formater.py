from functools import partial
from whylog_vim.output_formater.consts import LogReader
from whylog_vim.output_formater.output_aggregator import OutputAggregator


class LogReaderOutput(object):
    def __init__(self, editor):
        self.editor = editor

    def _format_input_line(self, output, front_input):
        output.add(
            LogReader.LINE_HEADER % (
                LogReader.ITEM,
                front_input.line_source,
                front_input.offset,
            )
        )
        output.create_button(partial(self.editor.go_to_file, front_input.line_source.path, front_input.offset+2), ())
        output.add(front_input.line_content)
        output.create_button(partial(self.editor.go_to_file, front_input.line_source.path, front_input.offset+2), ())

    def format_investigation_result(self, output, investigation_result):
        for line in investigation_result.lines:
            self._format_input_line(output, line)
        if investigation_result.constraints:
            output.add(LogReader.CONSTRAINT_LINKAGE % investigation_result.constraints_linkage)
            for constraint in investigation_result.constraints:
                output.add(str(constraint))

    def format_query(self, front_input, query_output):
        output = OutputAggregator()
        self._format_input_line(output, front_input)
        if not query_output:
            output.add('')
            output.add_commented(LogReader.EMPTY_OUTPUT)
            output.add_commented(LogReader.EMPTY_OUTPUT_CONTINUE)
            return output

        if len(query_output) == 1:
            output.add('')
            self.format_investigation_result(output, query_output[0])
            return output

        for result_number, result in enumerate(query_output, 1):
            output.add('')
            output.add(LogReader.RESULT_HEADER % result_number)
            self.format_investigation_result(output, result)
        return output
