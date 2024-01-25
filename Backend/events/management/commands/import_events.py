import csv
from django.core.management.base import BaseCommand
from django.utils.text import slugify
from api.models import Event
from datetime import datetime

class Command(BaseCommand):
    help = 'Import events from CSV file'

    def handle(self, *args, **kwargs):
        csv_file_path = 'C:/Users/sriva/madrasvaasi/Backend/event_data.csv'
        with open(csv_file_path) as file:
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                date = row.get('Date', '')  # Use get() to handle missing 'Date' key
                date_parts = [part.strip() for part in date.split('-')] if date else []

                if date_parts:
                    try:
                        start_date = datetime.strptime(date_parts[0], "%a %d %b %Y").strftime("%Y-%m-%d")
                        end_date = datetime.strptime(date_parts[-1], "%a %d %b %Y").strftime("%Y-%m-%d")
                    except ValueError as e:
                        print(f"Error parsing date for row {row}: {e}")
                        start_date = end_date = None
                Event.objects.create(
                    Event_Title=row['Event Title'],
                    Event_Link=row['Event Link'],
                    Event_Details=row['Event Details'],
                    start_date=start_date,
                    end_date=end_date,
                    Location=row['Location'],
                    Image_Source=row['Image Source']
                )
            self.stdout.write(self.style.SUCCESS('Events imported successfully'))