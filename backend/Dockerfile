FROM python:3
ENV PYTHONUNBUFFERED=1
RUN pip install --upgrade pip
WORKDIR usr/src/backend
COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY ./entrypoint.sh ./entrypoint.sh
COPY . .
RUN chmod 755 entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]