import unittest
from gameoflife.app import app


class FlaskApp_TestCase(unittest.TestCase):

    def test_main_page(self):
        response = app.test_client().get("/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b"<h1>Conway's Game of Life</h1>")

