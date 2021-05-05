FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
WORKDIR /app
COPY . /app
WORKDIR /app/api
RUN pip install -r requirements.txt
RUN python -m nltk.downloader punkt
EXPOSE 8000
CMD ["uvicorn", "recipe_api:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
