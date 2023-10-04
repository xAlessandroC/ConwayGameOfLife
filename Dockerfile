FROM python:3.10.9-slim-buster as base

# Prevent writing .pyc files on the import of source modules
# and set unbuffered mode to ensure logging outputs
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create app directory
WORKDIR /app

# Install app dependencies
COPY requirements.txt ./

RUN pip install -r requirements.txt

# Copy app source
COPY . .

WORKDIR /app/gameoflife
EXPOSE 5000
CMD [ "flask", "--app", "app", "--debug", "run", "--host", "0.0.0.0", "--port", "5000"]