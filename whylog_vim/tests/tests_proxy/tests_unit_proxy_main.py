from unittest2 import TestCase
from mock import patch

from whylog_vim.consts import EditorStates as States
from whylog_vim.proxy import WhylogProxy
from whylog_vim.tests.tests_proxy.utils import create_mock_editor


class UnitTestWhylogProxy(TestCase):
    def setUp(self):
        self.whylog_proxy = WhylogProxy(create_mock_editor())

    def tests_unit_check_log_reader_states_of_whylog_proxy(self):
        with patch('whylog.log_reader.LogReader.get_causes') as mock:
            mock.return_value = []
            self.assertEqual(self.whylog_proxy.get_state(), States.EDITOR_NORMAL)
            self.whylog_proxy.action()
            self.assertEqual(self.whylog_proxy.get_state(), States.LOG_READER)
            self.whylog_proxy.action()
            self.assertEqual(self.whylog_proxy.get_state(), States.LOG_READER)

    def tests_unit_check_teacher_states_of_whylog_proxy(self):
        self.assertEqual(self.whylog_proxy.get_state(), States.EDITOR_NORMAL)
        self.whylog_proxy.teach()
        self.assertEqual(self.whylog_proxy.get_state(), States.ADD_CAUSE)
        self.whylog_proxy.teach()
        self.assertEqual(self.whylog_proxy.get_state(), States.TEACHER)
