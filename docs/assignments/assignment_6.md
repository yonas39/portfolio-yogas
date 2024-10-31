---
title: "Assignement-6: User Testing"
layout: doc
---

# User Testing Plan for Ortho-Net

## Prepopulate Realistic Data

To help users interact with my "Ortho-Net" app in a way that reflects real usage, I populated the app with realistic data. This included creating varied posts (both short and lengthy) and adding multiple users with whom they could interact as friends or followers. By setting up the app with diverse content, I provided an environment that resembles peak usage, which helps users engage more naturally and effectively during testing.

## Task List

To ensure structured interactions and avoid open-ended exploration, I developed the following task list, formatted as a table with the required components:

| **Task Title**              | **Instruction to User**                                                      | **Rationale for Task**                                                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Create a Post**           | "Create a new post on your profile."                                         | Tests the ease of creating content, which is fundamental to user engagement. Shows if the interface for posting is intuitive and accessible. |
| **Edit Post**               | "Edit your post to add more details."                                        | Assesses how easily users can modify their posts, a common action that users need to do seamlessly.                                          |
| **Find a Specific Post**    | "Locate a post from [I provided names]."                                     | Helps determine if the search or navigation features are effective for locating content from specific users.                                 |
| **Bible Quiz (Part 1)**     | "Go to the Bible quiz section, answer the first set of questions, and exit." | Tests the accessibility of quizzes and user comfort in initiating tasks but not necessarily completing them.                                 |
| **Bible Quiz (Continue)**   | "Answer the next set of questions in the Bible quiz."                        | Evaluates how smoothly users can continue a partially completed task, checking if quiz continuity feels natural.                             |
| **Score Review**            | "Review your quiz score after completing the questions."                     | Tests the feedback mechanism and gauges whether users find score retrieval intuitive and rewarding.                                          |
| **Answer Correction**       | "Identify any correct answers for questions you missed."                     | Evaluates users' experience in accessing corrective feedback, which encourages learning and retention.                                       |
| **Create Prayer Mate**      | "Create a new 'Prayer Mate' group."                                          | Assesses the ease of group creation, a key feature for community building within the app.                                                    |
| **View & Join Prayer Mate** | "View details of your created 'Prayer Mate' and join an existing one."       | Tests the accessibility of group details and joining features, showing how users engage with group-based interactions.                       |
| **Leave Prayer Mate**       | "Leave the 'Prayer Mate' group you created."                                 | Tests whether users can intuitively manage and Leave the groups, a task critical for maintaining control over personal interactions.         |
| **Check Followers**         | "Check who is following you."                                                | Assesses whether users can easily navigate to view follower information, critical for managing connections.                                  |
| **Follow a User**           | "Follow [I provided user name]."                                             | Tests how intuitive it is for users to establish new connections, a key part of social functionality.                                        |
| **Unfriend a User**         | "Unfriend an existing friend."                                               | Evaluates the ease of removing connections, ensuring users have control over their network.                                                  |
| **Send Friend Request**     | "Send a friend request to [I provided user name]."                           | Tests how smoothly users can initiate new friendships, essential for community building.                                                     |
| **Accept Friend Request**   | "Accept a friend request."                                                   | Checks how intuitive the friend acceptance flow is, ensuring positive interactions are easy to manage.                                       |
| **Create Event**            | "Create a new event in the calendar."                                        | Evaluates the ease of event creation, a key feature for engagement within communities in the app.                                            |
| **Explore & Join Event**    | "Explore events and join one that interests you."                            | Tests user ability to browse and engage with events, showing if they can intuitively join activities that are appealing.                     |
| **Change Username**         | "Change your username."                                                      | Ensures users can easily manage their profile, especially for personal customization.                                                        |
| **Change Password**         | "Change your password."                                                      | Tests the security feature, ensuring users feel comfortable managing their account credentials.                                              |

By organizing tasks this way, each test session guides users through both simple and complex interactions, revealing insights into both usability and design intuitiveness. Each task builds upon the app’s key features to assess how effectively the design supports real user needs.

## Study Conduct

I began each session by explaining the participant's role and emphasizing the importance of thinking out loud while interacting with the Ortho-Net app. I encouraged each participant to voice their thoughts, frustrations, and feelings, asking them to verbalize any uncertainties. I reminded them that while I would be observing, I would only step in if they were truly unable to proceed.

During the session, I watched for any signs of frustration, confusion, or satisfaction taking notes on specific moments of hesitation, facial expressions, or repeated actions that signaled usability challenges. I recorded the tasks that the caused the most difficulty, noting any patterns in user behavior that could indicate broader design issues.

After completing the tasks, I dedicated approximately 20 minutes to debriefing, encouraging each participant to share their overall impressions of the Ortho-Net app. I prompted them to describe areas where they felt confident versus times they felt lost, focusing on moments when they hesitated or asked for clarification. I used this time to explore what they expected from specific interactions and why they thought certain elements were confusing. Additionally, I asked for suggestions on how they would improve the app’s usability based on their experience and observations.

## Study Report for Ortho-Net User Testing

## Participant 1

### Summary & Observations

1. **Easy Navigation for Basic Tasks:**
   Participant 1 efficiently completed basic tasks, such as creating and editing a post, without any issues, remarking, “This feels pretty intuitive.” This feedback suggests that the core content creation features are accessible and user-friendly. However, the participant noted, "Although it's easy to create a post, I’d like more options, like adding images or videos, and the ability to comment on and react to others' posts." Currently, my app only supports text posts, so I will consider adding multimedia support and interactive features to enhance user engagement. The other feedback I recieved from the participant was, "why would I see all the posts that was made by the app users?" This is a good point, I will consider adding a feature to filter the posts based on the user's interest or the user's friends. This will help the user to see the posts that are relevant to them. I Identified this issue during my needfinding, but failed to complete this task. I will consider adding this feature in the future updates to by filtering the posts based on the user's interest(People who they follow) and the user's friends.

   - **Heuristics: Easy Navigation for Basic Tasks**
     - Usability (Discoverability): The interface allows users to understand and complete basic tasks with ease.
     - Usability (Efficiency): Core functions are simple and intuitive, allowing quick task completion.
     - Usability (Pleasantness): Suggested improvements for adding multimedia options would enhance user enjoyment and engagement.
     - Severity: Medium

2. **Quiz Navigation Breakdown:**
   During the Bible Quiz, Participant 1 started confidently but struggled to navigate to the next question set. After a long pause, they commented, “I feel like there should be something that tells me where to go next to find the next set of questions.” This feedback highlighted a lack of clear directional cues in the interface, creating a disconnect in the user experience. Ultimately, they needed assistance to proceed to the next set of questions. Currently, the quiz UI only offers options to submit answers or view the correct answer, leading to confusion. I will consider adding a "Next" button to guide users smoothly through the quiz.

   Additionally, the current pop-up message upon submitting answers reads, “You completed set 1 of 5. Would you like to continue with more questions?” with options to "Cancel" or "Ok." To enhance clarity, I plan to revise this message to say, "You completed set 1 of 5. Click 'Ok' to continue with more questions or 'Cancel' to exit the quiz." This will provide clearer guidance on the available options.

   To further improve the quiz experience, I will consider implementing a progress bar to show the user how many questions they have answered and how many remain. This will help them understand their place in the quiz and manage their expectations. The Bible Quiz section is a significant feature of the app, and these enhancements aim to boost usability, engagement, and overall satisfaction. I will also add "Previous" and "Next" buttons, allowing users to navigate between question sets more easily.

   Upon completing the quiz, Participant 1 tried locating the correct answers to missed questions but couldn’t find a review or feedback screen. They remarked, “I would have liked to see where I went wrong.” This feedback highlights the expectation that feedback is essential to the quiz experience. Their inability to locate it underscores a gap in the app’s feedback mechanisms, which failed to reinforce learning outcomes. Rather than only showing the correct answer for the last section, I plan to display correct answers for all questions and ensure users can navigate to previous or next pages utilizing the "Previous" and "Next" button to seamlessly to review their answers comparing to the correct ones. This will allow users to understand and learn from their mistakes.

- **Heuristic: Quiz Navigation Breakdown**
  - Usability (Discoverability): The absence of a “Next” button and clear directional cues hampers users’ ability to navigate intuitively.
  - Usability (Error Tolerance): Providing clearer options in the pop-up message helps prevent user confusion.
  - Physical Heuristics (Mapping): The interface lacks a clear conceptual map, making it hard for users to understand their current location within the quiz.
  - Physical Heuristics (Situational Context): A progress bar would give users context within the quiz, helping them track their progress and position.
    -Severity: Major

3. **Overloaded Friend List Interface:**
   Participant 1 noted that the Friends List UI felt crowded, as it displayed pending friend requests, current friends, and friend suggestions all on the same page. This layout made navigation difficult and led to cognitive overload. They commented, "I’d like to see pending requests and friend notifications as a badge on the Friends tab, which I could click to view requests sent to me."

   Additionally, the participant questioned the basis for friend recommendations, saying, "On what basis are users recommended to me as friends?" Currently, the app doesn’t utilize a complex algorithm for friend suggestions, but I will consider adding a feature to recommend friends based on shared interests and mutual connections, helping users find relevant friends more easily.

   The participant also suggested adding individual user profiles for incoming friend requests so they can make more informed decisions about accepting or rejecting requests. While implementing some of these improvements may be time-consuming and potentially outside the current project scope, several features could immediately reduce cognitive overload:

   - Adding a notification badge for pending friend requests, which, when clicked, could display a pop-up overlay with the list of pending requests.
   - Incorporating a search functionality to help users quickly locate friends, enhancing navigability and reducing frustration.
   - Creating user profile pages that allow users to view a profile before deciding to accept or reject a friend request.

   Participant 1 also hesitated when attempting to "Unfriend" someone, expressing concern: “I don’t know if this will notify them... I’m worried they might see.” This moment of hesitation pointed to a linguistic flaw in the app’s terminology. The ambiguity around the term “Unfriend” could impact users' confidence and understanding of the action’s consequences. To address this, the app’s language could clarify this action to make it more user-friendly. In addition, clicking on the unfriend button simply removes the friend without any confirmation dialog. This could lead to accidental unfriending. I will consider adding a confirmation dialog to confirm the action before removing the friend.

   - **Heuristic: Overloaded Friend List Interface**
     - Usability (Efficiency): Simplifying the display of friends, requests, and suggestions helps streamline navigation and reduce cognitive load.
     - Usability (Discoverability): Introducing badges for pending friend requests improves the discoverability of new social interactions.
     - Physical Heuristics (Mapping): Separating pending requests, friends, and suggestions into distinct areas or tabs would improve conceptual mapping, making the interface easier to interpret.
     - Linguistic Level (Speak the User's Language): Adjusting the language around "Unfriend" to clarify its consequences would reduce user hesitation and confusion.(Undecided what to use for now but will consider adding a tooltip or confirmation dialog explaining that removing a friend is discreet and won’t notify the other user.)
     - Usability (Safety): Providing a brief description of the action’s result would enhance user confidence in managing social connections.
     - Usability (Safety): Users could unfriend thier friends by mistake, so I will consider adding a confirmation dialog to confirm the action.
     - Severity: Major

<!-- 4. **Discovering Followers:**
   Participant 1 spent extra time locating their follower list, navigating through several screens without success. They eventually found it after multiple attempts but remarked, “I’d expect this to be somewhere more visible.” Their experience indicates that the app’s layout may be too layered, resulting in unnecessary complexity for simple, frequently needed functions like follower/following lists. -->

### Analysis & Inferences

Participant 1’s behaviors reflect both successful elements and critical areas for improvement. Basic post creation tasks seemed highly accessible, suggesting the app’s primary actions are well-designed. However, the quiz navigation, lack of feedback visibility, lack of confirmation dialog and unclear terminology in the app features, and difficulty accessing friends(Users detailed profile) information reveal specific usability issues. These reflect conceptual gaps, linguistic barriers, and physical layout flaws that hindered user understanding and fluidity.

## Participant 2

### Summary & Observations

Participant 2 also encountered a mix of successes and challenges during the Ortho-Net testing session. Their experiences highlighted several usability issues and design opportunities, providing valuable insights into the app’s strengths and weaknesses. They shared pretty much simmilar feedback as Participant 1, to avoid repetition I will only mention the feedback that was different from Participant 1.

1. **Overly Simplified Settings Interface:**
   Participant 2 found the settings interface overly simplistic, commenting, “I expected more options here.” Currently, the settings page only allows users to change their username and password, but users must remember their current credentials to do so, which raises a significant safety concern. If users forget their password or username, they should have options to retrieve it by answering security questions or receiving a reset link via email features absent in the current app. This absence worried Participant 2, who noted that recovery options are standard across most social media platforms. In future updates, I plan to add these features to meet user expectations and address this safety concern.

   - **Heuristics: Settings Interface Complexity**
     - Usability (Safety): Offering recovery options would align with user safety expectations.
     - Usability (Efficiency): Enhancing options within the settings improves users’ control and - satisfaction.
     - Severity: Major

2. **Post and Quiz Interactions:**
   Participant 2 reacted positively to the process of creating and editing posts, stating, “I like that this is so quick.” However, they experienced hesitation during the quiz, especially when locating the next set of questions, noting, “I thought it’d just take me there automatically.” This comment revealed a usability gap in the UI’s ability to guide users intuitively through the quiz experience, mirroring a challenge Participant 1 faced. Adding a "Next" & "Previous" button to smoothly guide users through the quiz would likely enhance usability and reduce confusion.

   - **Heuristics: Quiz Navigation Guidance**
     - Usability (Discoverability): More intuitive quiz progression would align with user expectations.
     - Usability (Error Tolerance): Buttons would prevent confusion and support continuity.
     - Severity: Moderate

3. **Desire for More Intuitive Profile Access:**
   During the debrief, Participant 2 suggested consolidating profile settings, saying, “Maybe put profile settings in one place?” This feedback implies that the current profile organization doesn’t align with their mental model, highlighting a conceptual flaw in the layout of core features. The user also expressed a desire for a profile picture update option, a standard feature in social media applications. Adding this feature would align the app’s functionality with user expectations.

   - **Heuristics: Profile Settings Consolidation**
     - Usability (Efficiency): Centralizing profile settings would streamline user interactions and reduce cognitive load.
     - Usability (Pleasantness): Including a profile picture update option would enhance user customization and satisfaction.
     - Severity: Moderate

4. **Prayer Mate Creation and Navigation:**
   Participant 2 found the Prayer Mate group creation process straightforward, stating, “I like how easy it is to start a group.” However, they expressed confusion about locating the group they had created, mentioning, "I thought the groups I created could be listed separately from other groups." In the current design, newly created groups are included in the general list of prayer mates, requiring the user to search within this list to find their group. To address this, I plan to add a dedicated "My Groups" section, displayed on the right side of the UI, where users can easily view the groups they have created.

   Additionally, Participant 2 highlighted challenges in finding and joining existing groups, commenting, “If there is a huge list of groups, it could be hard to navigate and find the ones I’m interested in.” This reveals a significant design limitation, which could be mitigated by implementing more advanced filtering and sorting options to improve accessibility within the prayer mates group list.

   Furthermore, the user identified a flaw in the group details, join, and leave functionalities. Currently, joining or leaving a group is a one-click action, which prevents users from viewing group details before making their decision. Participant 2 expressed a desire to see group information before joining or leaving to make a more informed choice. Introducing confirmation prompts for these actions could enhance usability and provide an additional layer of safety. Moreover, this user expressed interest in viewing a list of members in a group, rather than just the total member count, to help them identify acquaintances before joining.

   - **Heuristics: Prayer Mate Creation and Navigation**
     - Usability (Discoverability): Adding a dedicated “My Groups” section would improve user navigation and group management.
     - Usability (Efficiency): Advanced filtering and sorting options would enhance user experience in finding and joining groups.
     - Usability (Safety): Confirmation prompts for joining and leaving groups would prevent accidental actions and enhance user control.
     - Usability (Pleasantness): Displaying group details before joining would improve user decision-making and engagement.
     - Severity: Major

5. **Event Calendar:**
   Participant 2 found the event creation process as intuitive as the Prayer Mate group creation process, stating, “I like how easy it is to create an event.” However, they experienced frustration when trying to join an event, saying, “I thought I could just click on the event to join.” This feedback highlighted a gap in the UI’s intuitiveness in guiding users through the event participation process. Additionally, they expressed confusion about why the Event and Prayer Mate creation processes have different UIs, despite being similar functionalities. Consistency in the UI for similar tasks could improve user understanding and navigation within the app. For future updates, I will consider using a unified UI for similar functionalities.

   Another issue mentioned was the delete functionality. The user suggested adding a confirmation dialog before deleting an event, which would help prevent accidental deletions. They also noted a security concern: currently, users can delete events created by others. In the next iteration, I will address this by restricting delete permissions to event creators and adding a confirmation prompt before proceeding with deletion, thereby enhancing both usability and security.

   Additionally, there’s a bug causing the participant count for events to remain unchanged after a user joins, which needs to be addressed in future updates. Similar to the Prayer Mate groups, the user would like to view event details before joining. This feature would allow users to make informed decisions about their participation. They also suggested an option to see who is attending before joining, along with a commitment status indicator (e.g., "interested," "going," "not going"), which could help both attendees and event organizers gauge commitment levels and plan accordingly.

   - **Heuristics: Event Calendar**
     - Usability (Discoverability): Improving event join functionality would enhance user engagement and participation.
     - Usability (Consistency): Aligning UI elements for similar functionalities would reduce user confusion and improve navigation.
     - Usability (Safety): Adding a confirmation dialog for event deletion would prevent accidental actions and enhance user control.
     - Usability (Safety): Restricting event deletion permissions to creators would improve security and prevent unauthorized actions.
     - Usability (Pleasantness): Displaying event details before joining would improve user decision-making and engagement.
     - Usability (Pleasantness): Providing a list of attendees and commitment status indicators would enhance user interaction and event planning.
     - Severity: Major

6. **Bible Verse Quote Feature**
   Both Participants 1 and 2 liked the concept of the daily Bible verse but were dissatisfied with the lack of source information. They wanted to see the verse’s exact reference so they could easily locate it in the Bible. I plan to display this reference below the verse in future updates to meet this user need.

   - **Heuristics: Bible Verse Quote Feature**
     - Usability (Pleasantness): Adding the verse reference would enhance user satisfaction and engagement.
     - Severity: Minor

### Analysis & Inferences

Participant 2’s feedback underscores strengths, such as the intuitive group and event creation processes, while highlighting key areas for improvement in navigation, security, and UI consistency. Confusion around locating created groups and joining events points to a need for a more organized and cohesive interface. Their concerns regarding limited recovery options in settings and event deletion permissions suggest a demand for enhanced security measures. Additionally, aligning similar functionalities with a unified UI and adding participant visibility options would improve user navigation and engagement. Addressing these aspects will enhance usability, making the app more intuitive and user centered.
