from django.db import models
from django.conf import settings
import uuid

# Create your models here.

class Tournament(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30)
    sport = models.CharField(max_length=15)
    age_type = models.CharField(max_length=15)

    class Meta:
        db_table = 'tournaments'

    def __str__(self):
        return self.name

class League(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)

    class Meta:
        db_table = 'leagues'

    def __str__(self):
        return self.name

class Agent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    surname = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    birthday = models.DateField()
    position = models.CharField(max_length=20)

    class Meta:
        db_table = 'agents'

    def __str__(self):
        return self.surname + self.name

class Playground(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    address = models.CharField(max_length=30)

    class Meta:
        db_table = 'playgrounds'

    def __str__(self):
        return self.name

class Team(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    sport = models.CharField(max_length=15)
    site = models.CharField(max_length=40)
    info = models.TextField()
    playground = models.ForeignKey(Playground, on_delete=models.CASCADE)
    age_type = models.CharField(max_length=15)
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    is_approved = models.BooleanField()

    class Meta:
        db_table = 'teams'

    def __str__(self):
        return self.name

class Player(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    surname = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    birthday = models.DateField()
    position = models.CharField(max_length=20)
    student_id = models.IntegerField(null=True, blank=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    is_approved = models.BooleanField()

    class Meta:
        db_table = 'players'

    def __str__(self):
        return self.surname + self.name
