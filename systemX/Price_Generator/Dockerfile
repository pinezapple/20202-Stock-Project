FROM python:3.7

WORKDIR /app

COPY config.py database.py main.py model.py ticker.py requirements.txt /app/

RUN pip install -r ./requirements.txt
