---
title: "Assignement-4: Backend Design & Implementation"
layout: doc
---

#

# Assignement-4: Backend Design & Implementation

# Data Modeling with Operational Principles

---

## Concept: PrayerMate [User, Item]

**Purpose**: Facilitate collaborative prayer sessions among users.

### Operational Principles

- **Group Participation**: If a user joins a prayer group, they can participate in the group’s active prayer sessions.
- **Session Management**: If a session is started for a prayer group, it remains active until explicitly ended.

### State

- `PrayerGroups`: Set of `Item`.
- `GroupID`: Set of unique `Integer`.
- `Members`: Set of `User`.
- `PrayerTopic`: Mapping `GroupID -> one String`.
- `ActiveSession`: Mapping `GroupID -> lone Session`.

### Actions

- `Create Prayer Group(leader, title, topic)`: Create a new group with a designated leader.
- `Join Prayer Group(user, GroupID)`: Add a user to the group’s `Members`.
- `Start Prayer Session(GroupID)`: Activate a prayer session for the group.
- `End Prayer Session(GroupID)`: Mark the current prayer session as completed.
- `Leave Group(user, GroupID)`: Remove a user from the group's membership.

---

## Concept: Calendar [User, Item]

**Purpose**: Enable users to organize and manage events, keeping track of location, time, and attendees.

### Operational Principles

- **Event Management**: When an event is created, users are notified and can RSVP or join the event.

### State

- `Events`: Set of `Event`.
- `EventID`: One unique `Integer`.
- `HostID`: Mapping `EventID -> one User`.
- `Location`: Mapping `EventID -> one String`.
- `StartTime`: Mapping `EventID -> one Date`.

### Actions

- `Create Event(host, title, startTime, location)`: Add a new event to the calendar.
- `Update Event(eventID, details)`: Modify the event’s details.
- `Join Event(user, eventID)`: RSVP for an event.
- `Cancel Event(eventID)`: Remove the event.

---

## Concept: BibleQuiz [User]

**Purpose**: Provide users with quizzes on religious topics, tracking their progress and scores.

### Operational Principles

- **Quiz Progression**: When a user answers a quiz question, their score and progress are updated in real time.

### State

- `Quizzes`: Set of `Question -> String`.
- `QuizID`: Set of unique `Integer`.
- `Player`: Mapping `User -> set Question`.
- `Title`: One `String`.
- `Status`: One `String`.

### Actions

- `Create Quiz(title, questions)`: Create a new quiz.
- `Answer Question(user, quizID, questionID, answer)`: Submit an answer and update the score.
- `Get Leaderboard(quizID)`: View top players’ scores.
- `Get Progress(user, quizID)`: Fetch the player’s progress in a quiz.

---

## Concept: Follow [User]

**Purpose**: Allow users to follow others to view their published content and updates.

### Operational Principles

- **Content Visibility**: If a user follows someone, they can view the followed user's published content in their feed.

### State

- `FollowerList`: Set of `User`.
- `Status`: One `String`.
- `FollowerCount`: One `Integer`.

### Actions

- `Follow User(follower, following)`: Add a user to the follower’s list.
- `Unfollow User(follower, following)`: Remove a user from the follower’s list.
- `Block User(follower, following)`: Block a user from following or interacting.
- `Get Follower Count(user)`: Return the number of followers.

---

## Concept: Friend [User]

**Purpose**: Allow users to establish friendships, allowing mutual interactions and viewing of private content.

### Operational Principles

- **Friendship Management**: When a friend request is accepted, both users are added to each other’s `FriendsList`.

### State

- `FriendsList`: Set of `FriendT`.
- `user1, user2`: Mapping `FriendT (one friend) -> one User`.

### Actions

- `Send Friend Request(from, to)`: Send a friend request.
- `Accept Friend Request(from, to)`: Accept a pending friend request.
- `Remove Friend(user1, user2)`: End a friendship.

---

## Concept: Tour [User, Item]

**Purpose**: Offer virtual tours of religious or cultural sites, allowing users to participate in group or individual tours.

### Operational Principles

- **Tour Participation**: If a user joins a tour, they can access the immersive virtual experience with other participants.

### State

- `Tours`: Set of `Tour`.
- `TourID`: Set of unique `Integer`.
- `Participants`: Set of `User`.
- `AvailableDates`: Mapping `Item -> TourID -> set Date`.
- `TourDescription`: One `String`.
- `TourTitle`: One `String`.

### Actions

- `Create Tour(title, description, availableDates)`: Create a new tour.
- `Join Tour(user, tourID)`: Add a user to the list of participants.
- `View Tour Details(tourID)`: Retrieve tour details such as description and dates.
- `Leave Tour(user, tourID)`: Remove a user from the participant list.

---

## Concept: Authentication

**Purpose**: Authenticate users to secure access to personalized content and features.

### Operational Principles

- **User Authentication**: When a user logs in with correct credentials, they are granted access to their account.

### State

- `RegisteredUsers`: Set of `User`.
- `Username`: Mapping `RegisteredUsers -> one String`.
- `Password`: Mapping `RegisteredUsers -> one String`.

### Actions

- `Register(username, password)`: Add a new user to the system.
- `Authenticate(username, password)`: Verify the credentials for a login.
- `Update Password(userID, newPassword)`: Change the user's password.
- `Delete User(userID)`: Remove a user from the system.

---

## Concept: Session [User]

**Purpose**: Manage user sessions, keeping track of logged-in users.

### Operational Principles

- **Session Management**: If a session is started, the user remains logged in until the session ends.

### State

- `ActiveSessions`: Set of `Session`.
- `User`: One `User`.

### Actions

- `Start Session(user)`: Start a session when the user logs in.
- `End Session(user)`: End a session, logging out the user.
- `Check Session(user)`: Validate if the session is active for a given user.

![image](./assignment_2_docs/data_design.jpeg)

```
App: OrthoNet
  Inlcude:
    Authentication
    PrayerMate [User, Item ]
    Calendar [User, Item ]
    BibleQuiz [User]
    Tour[User, Item]
    Follow [User]
    Friend [User]
    Session[User.user]
    Post [User]

```

### Design Reflection

For Touring, I initially faced ambiguity regarding how participants would join and leave tours. The design did not address cases where a user might attempt to join a tour multiple times or leave after the tour had started. To resolve this, I implemented safeguards to check participant status before adding or removing them. This ensures that users can only join a tour once and can leave after the tour has started without affecting other participants.

For the BibleQuiz concept, I encountered challenges in tracking user progress and scores. The initial design did not account for multiple quizzes or questions, making it difficult to manage user data effectively. To address this, I introduced unique quiz IDs and question sets, allowing users to participate in different quizzes and track their progress separately. This modification enhances the scalability and usability of the BibleQuiz feature, enabling users to engage with a variety of religious topics and quizzes. also, I added a leaderboard feature to view top players' scores, providing a competitive element to the quiz experience.

For Eventing, the most significant challenge was handling attendee management. The conceptual design missed handling RSVP changes (like switching from "maybe" to "going") and managing event updates while maintaining attendee status. I introduced state transitions to reflect real-time RSVP updates, which resolved the issue but added complexity in tracking these changes.

Finally, Following raised issues around managing blocked users and follow states, which were not well-defined in the original design. I added a clearer flow for blocking/unblocking and status validation to ensure consistent follow/unfollow behaviors.

Deployed my app in the following link: [My Vercel Link](https://61040-a4-rho.vercel.app)

Here is the link to my current repository: [GitHub](https://github.com/yonas39/A4_startercode)

Note:
I utilized Chat-GPT to debug and generate starting code for my routes



