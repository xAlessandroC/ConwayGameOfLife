import unittest
from gameoflife.app import app


class FlaskApp_TestCase(unittest.TestCase):

    def test_main_page(self):
        response = app.test_client().get("/")

        self.assertEqual(response.status_code, 200)

