# FlashCards App

FlashCards App is a web application designed to help users review and test their knowledge on various subjects using flashcards. Users can create custom flashcards, play through them by answering questions, and keep track of their progress.

![image](https://github.com/user-attachments/assets/e13f9f8e-27c1-4857-8b9e-6e76adcb973e)


## Features

1. **Create Flashcards**
   - Users can create their own flashcards by entering a question, four possible answers, the correct answer, and additional information about the question.
  
   ![image](https://github.com/user-attachments/assets/68803812-3ddb-4ac0-9e49-88fbb6081b62)


2. **Play Flashcards**
   - Users can answer questions displayed on the flashcards.
   - Feedback is provided for each answer (correct or incorrect).
   - Users can navigate between questions using the "Next Question" button.
  
   ![image](https://github.com/user-attachments/assets/382bcd62-fbc1-439f-9320-e1c4347a1674)


3. **End of Game Summary**
   - At the end of the game, users see a summary of their performance, including the number of correct and incorrect answers.

   ![image](https://github.com/user-attachments/assets/ed9bcd91-39ef-42cc-8957-346aa3cc2381)


4. **Navigation Options**
   - Users can go back to the main menu at any time.
   - A "Reset" button allows users to restart the game.

5. **Shuffle Questions**
   - Users can shuffle the deck of flashcards for a new order of questions.

6. **More Info**
   - Users can click a button to view additional information about the current question.

## Installation

1. Clone the repository or download the source code.
2. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
3. Ensure you have a basic HTTP server or the "Live Server" extension installed for running the app.

## Usage

### Running the App

1. Open the `index.html` file in your browser.
   - If using VS Code, right-click on `index.html` and select **Open with Live Server**.
   - Alternatively, double-click the `index.html` file to open it in your default browser.

### Creating Flashcards

1. From the main menu, click "Create Flashcards."
2. Fill in the form with the following details:
   - **Question:** The question to display on the flashcard.
   - **Answer Options:** Four possible answers (A, B, C, D).
   - **Correct Answer:** Specify the correct answer (A, B, C, or D).
   - **Additional Info:** (Optional) Add detailed information about the question.
3. Click "Add Flashcard" to save your flashcard.
4. Return to the main menu to play the game.

### Playing the Game

1. From the main menu, click "Play Game."
2. A flashcard will appear with a question and four possible answers.
3. Click on the correct answer.
   - Feedback will indicate whether your answer was correct or incorrect.
4. Click "Next Question" to proceed to the next flashcard.
5. When all flashcards have been answered, a summary of results will appear.

### Additional Options

- **Reset Game:** Restarts the game and clears the current progress.
- **Shuffle:** Randomizes the order of flashcards.
- **More Info:** Displays additional information about the current question.

## Technologies Used

- **HTML**: Structure of the web application.
- **CSS**: Styling and layout.
- **JavaScript**: Interactivity and game logic.

## Customization

You can customize the app by editing the JavaScript object that stores the flashcards. This object is located in `script.js` under the variable `questions`.

## Contribution

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is open-source and available under the MIT License.

---

Enjoy learning and testing your knowledge with FlashCards App!

