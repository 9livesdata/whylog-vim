from whylog_vim.exceptions import WhylogVimException


class CannotGoToPosition(WhylogVimException):
    """
    This exception will be raised when the process of moving to the
    offset of the window.
    """
    def __init__(self, position):
        self.position = position

    def __repr__(self):
        return 'Cannot go to byte %s in window' % self.position
