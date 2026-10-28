const experimentsData = [
  {
    "id": "exp-1",
    "num": 1,
    "title": "Experiment 1: Arrays",
    "shortName": "Arrays",
    "desc": "Fixed-size array operations & vehicle number plate format validator",
    "subquestions": [
      {
        "number": "1. a.",
        "title": "1. a.",
        "subtitle": "Array of Fixed Dimension (Insertion & Display)",
        "question": "1. a. Write a C program to implement an array of fixed dimension. Perform the following operations: inserting elements into an array and displaying the contents of the array. (User enters the size of the array.)",
        "algorithm": [
          "Start the program.",
          "Declare integer variable n to store the size of the array.",
          "Prompt the user to enter the size of the array and read the value into n.",
          "Declare an integer array arr of size n.",
          "Prompt the user to enter n values to store in the array.",
          "Iterate from i = 0 to n - 1 and read each value into arr[i] using scanf.",
          "Display the stored elements by iterating from i = 0 to n - 1 and printing each arr[i].",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    printf(\"Enter the size of the array:\");\n    scanf(\"%d\", &n);\n\n    int arr[n];\n\n    printf(\"Enter the %d values to store it in array: \\n\", n);\n    for (int i = 0; i < n; i++)\n    {\n        scanf(\"%d\", &arr[i]);\n    }\n\n    printf(\"The values stored in the array are: \\n\");\n    for (int i = 0; i < n; i++)\n    {\n        printf(\"%d \\n\", arr[i]);\n    }\n\n    return 0;\n}"
      },
      {
        "number": "1. b.",
        "title": "1. b.",
        "subtitle": "Vehicle Number Plate Validator",
        "question": "1. b. Evaluate the Number Plates of Vehicles. Write a C program to insert a vehicle registration number into a 1x10 array and validate it against the format: 2 letters (state code) + 2 digits (district code) + 2 letters (RTO serial) + 4 digits (vehicle number), e.g. KA09MN3865. Print \"Accept\" if valid, else \"Reject\".\n\nRules to check:\ni. First two positions of an array must be a State Code.\nii. Next two positions of an array must be District Code.\niii. Next two Positions of an array must be a Serial Number of an RTO.\niv. The penultimate position of the array must contain a vehicle number.",
        "algorithm": [
          "Start the program.",
          "Define a function verifyRegistration(registration) returning boolean:",
          [
            "Check if the length of the string is exactly 10 using strlen(). If not, return false.",
            "Verify indices 0 and 1 are alphabets using isalpha(). If not, return false.",
            "Verify indices 2 and 3 are digits using isdigit(). If not, return false.",
            "Verify indices 4 and 5 are alphabets using isalpha(). If not, return false.",
            "Verify indices 6 through 9 are digits using isdigit(). If not, return false.",
            "If all checks pass, return true."
          ],
          "In main():",
          [
            "Declare character array registration of size 11.",
            "Prompt user and read vehicle registration string.",
            "Call verifyRegistration(registration).",
            "If true, print \"Accept: Vehicle registration number is valid.\\n\".",
            "If false, print \"Reject: Vehicle registration number is invalid.\\n\"."
          ],
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\n#include <ctype.h>\n\n// Function to verify if a vehicle registration number is valid\nbool verifyRegistration(char registration[]) {\n    // Check if the registration number has exactly 10 characters\n    if (strlen(registration) != 10) {\n        return false;\n    }\n\n    // Check if the first two characters are alphabets (e.g., \"KA\" for Karnataka)\n    for (int i = 0; i < 2; i++)\n    {\n        if (!isalpha((unsigned char)registration[i]))\n        {\n            return false;\n        }\n    }\n\n    // Check if the next two characters are numbers (e.g., \"09\" for a specific district)\n    for (int i = 2; i < 4; i++)\n    {\n        if (!isdigit((unsigned char)registration[i]))\n        {\n            return false;\n        }\n    }\n\n    // Check if the next two characters are alphabets (e.g., \"MN\" for serial number)\n    for (int i = 4; i < 6; i++)\n    {\n        if (!isalpha((unsigned char)registration[i]))\n        {\n            return false;\n        }\n    }\n\n    // Check if the last four characters are numbers (e.g., \"3865\" for vehicle number)\n    for (int i = 6; i < 10; i++)\n    {\n        if (!isdigit((unsigned char)registration[i]))\n        {\n            return false;\n        }\n    }\n\n    return true;\n}\n\nint main() {\n    char registration[11];\n    printf(\"Enter a vehicle registration number:\");\n    scanf(\"%s\", registration);\n\n    if (verifyRegistration(registration))\n    {\n        printf(\"Accept: Vehicle registration number is valid.\\n\");\n    }\n    else\n    {\n        printf(\"Reject: Vehicle registration number is invalid.\\n\");\n    }\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-2",
    "num": 2,
    "title": "Experiment 2: Matrices",
    "shortName": "Matrices",
    "desc": "Matrix multiplication with dimension checks & 9x9 Sudoku board validator",
    "subquestions": [
      {
        "number": "2. a.",
        "title": "2. a.",
        "subtitle": "Matrix Multiplication",
        "question": "2. a. Write a C program that multiplies two matrices, ensuring the number of columns in the first matrix equals the number of rows in the second. Display the resulting matrix. (User enters the matrix dimensions.)",
        "algorithm": [
          "Start the program.",
          "Read dimensions of first matrix (m rows, n columns).",
          "Read dimensions of second matrix (p rows, q columns).",
          "Check multiplication condition: if n != p, display error that columns of first must equal rows of second, and terminate with code 1.",
          "Declare firstMatrix[m][n], secondMatrix[p][q], and resultMatrix[m][q].",
          "Read elements of first matrix using nested loops.",
          "Read elements of second matrix using nested loops.",
          "Multiply matrices using three nested loops (i from 0 to m-1, j from 0 to q-1, k from 0 to n-1), accumulating product into resultMatrix[i][j].",
          "Print resultant matrix row by row.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n\nint main() {\n    int m, n, p, q;\n\n    printf(\"Enter the number of rows and columns of the first matrix: \");\n    scanf(\"%d %d\", &m, &n);\n\n    printf(\"Enter the number of rows and columns of the second matrix: \");\n    scanf(\"%d %d\", &p, &q);\n\n    if (n != p) {\n        printf(\"Matrix multiplication is not possible. Column of the first matrix must be equal to the row of the second matrix.\\n\");\n        return 1;\n    }\n\n    int firstMatrix[m][n], secondMatrix[p][q], resultMatrix[m][q];\n\n    printf(\"Enter elements of the first matrix:\\n\");\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            scanf(\"%d\", &firstMatrix[i][j]);\n        }\n    }\n\n    printf(\"Enter elements of the second matrix:\\n\");\n    for (int i = 0; i < p; i++) {\n        for (int j = 0; j < q; j++) {\n            scanf(\"%d\", &secondMatrix[i][j]);\n        }\n    }\n\n    // Matrix multiplication\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < q; j++) {\n            resultMatrix[i][j] = 0;\n            for (int k = 0; k < n; k++) {\n                resultMatrix[i][j] += firstMatrix[i][k] * secondMatrix[k][j];\n            }\n        }\n    }\n\n    printf(\"Resultant matrix after multiplication:\\n\");\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < q; j++) {\n            printf(\"%d \", resultMatrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}"
      },
      {
        "number": "2. b.",
        "title": "2. b.",
        "subtitle": "Validate 9x9 Sudoku Board",
        "question": "2. b. Validate the Sudoku board. Write a C program to determine the validity of a 9x9 Sudoku board using only the pre -filled cells, checking rows, columns, and 3x3 sub -grids for duplicates. Print \"Accept\" if the board obeys all Sudoku rules, else print \"Reject\".\n\nConditions to check:\ni. Every row should encompass the numbers 1 through 9,ensuring no duplication.\nii. Each column should consist of the numbers1to9,ensuring no duplication.\niii. Within the nine 3x3 sub-boxes of the grid, no repetitions allowed.\n\nSample Input:\n//copy and paste the input\nint Sudoku [9][9] = {\n{5, 3, 0, 0, 7, 0, 0, 0, 0},\n{6, 0, 0, 1, 9, 5, 0, 0, 0},\n{0, 9, 8, 0, 0, 0, 0, 6, 0},\n{8, 0, 0, 0, 6, 0, 0, 0, 3},\n{4, 0, 0, 8, 0, 3, 0, 0, 1},\n{7, 0, 0, 0, 2, 0, 0, 0, 6},\n{0, 6, 0, 0, 0, 0, 2, 8, 0},\n{0, 0, 0, 4, 1, 9, 0, 0, 5},\n{0, 0, 0, 0, 8, 0, 0, 7, 9}\n};",
        "algorithm": [
          "Start the program.",
          "Define isValidSudoku(board):",
          [
            "Row verification: For each row i (0 to 8), initialize frequency array row[10] with 0; for each j (0 to 8), if board[i][j] != 0 and row[board[i][j]] == 1 return 0 (invalid), else mark row[board[i][j]] = 1.",
            "Column verification: For each col j (0 to 8), initialize frequency array col[10] with 0; for each i (0 to 8), if board[i][j] != 0 and col[board[i][j]] == 1 return 0 (invalid), else mark col[board[i][j]] = 1.",
            "3x3 Subgrid verification: For each block (0 to 8), initialize subgrid[10] with 0; iterate through block rows and cols; if duplicate found return 0, else mark seen.",
            "If all checks pass, return 1 (valid)."
          ],
          "In main():",
          [
            "Initialize 9x9 sudoku array with sample input.",
            "Call isValidSudoku(sudoku).",
            "If valid (1), print \"Accept\"; else print \"Reject\"."
          ],
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n\nint isValidSudoku(int board[9][9]) {\n    // Check rows\n    for (int i = 0; i < 9; i++) {\n        int row[10] = {0};\n        for (int j = 0; j < 9; j++) {\n            if (board[i][j] != 0 && row[board[i][j]] == 1) {\n                return 0; // Invalid Sudoku\n            }\n            if (board[i][j] != 0) row[board[i][j]] = 1;\n        }\n    }\n\n    // Check columns\n    for (int j = 0; j < 9; j++) {\n        int col[10] = {0};\n        for (int i = 0; i < 9; i++) {\n            if (board[i][j] != 0 && col[board[i][j]] == 1) {\n                return 0; // Invalid Sudoku\n            }\n            if (board[i][j] != 0) col[board[i][j]] = 1;\n        }\n    }\n\n    // Check 3x3 subgrids\n    for (int block = 0; block < 9; block++) {\n        int subgrid[10] = {0};\n        for (int i = block / 3 * 3; i < block / 3 * 3 + 3; i++) {\n            for (int j = block % 3 * 3; j < block % 3 * 3 + 3; j++) {\n                if (board[i][j] != 0 && subgrid[board[i][j]] == 1) {\n                    return 0; // Invalid Sudoku\n                }\n                if (board[i][j] != 0) subgrid[board[i][j]] = 1;\n            }\n        }\n    }\n\n    return 1; // Valid Sudoku\n}\n\nint main() {\n    int sudoku[9][9] = {\n        {5, 3, 0, 0, 7, 0, 0, 0, 0},\n        {6, 0, 0, 1, 9, 5, 0, 0, 0},\n        {0, 9, 8, 0, 0, 0, 0, 6, 0},\n        {8, 0, 0, 0, 6, 0, 0, 0, 3},\n        {4, 0, 0, 8, 0, 3, 0, 0, 1},\n        {7, 0, 0, 0, 2, 0, 0, 0, 6},\n        {0, 6, 0, 0, 0, 0, 2, 8, 0},\n        {0, 0, 0, 4, 1, 9, 0, 0, 5},\n        {0, 0, 0, 0, 8, 0, 0, 7, 9}\n    };\n\n    if (isValidSudoku(sudoku)) {\n        printf(\"Accept\\n\");\n    } else {\n        printf(\"Reject\\n\");\n    }\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-3",
    "num": 3,
    "title": "Experiment 3: Structures",
    "shortName": "Structures",
    "desc": "Student academic system using structure variables and structure pointers",
    "subquestions": [
      {
        "number": "3. a.",
        "title": "3. a.",
        "subtitle": "Student Academic System (Structure Variables)",
        "question": "3. a. Develop a student academic system (array of structures, using simple structure variables) that stores Student ID, Name, Grade, Subject -wise Marks, The system should also be able to do the following operations:\ni. Calculate the average marks for each student.\nii. Assign grades based on the average marks.\n\nConditions\ni. Must use array of structures.\nii. Uses implies structure variable to access the members of the structure.\niii. Enter marks for minimum of 5 students with subjects each.",
        "algorithm": [
          "Start the program.",
          "Define struct Student with studentID, name, grade, marks[5], and averageMarks.",
          "Define calculateAverage(student): Sum marks for 5 subjects and compute averageMarks = totalMarks / 5.",
          "Define assignGrades(student): If averageMarks >= 90 assign 'A', else if >= 80 assign 'B', else if >= 70 assign 'C', else if >= 60 assign 'D', else assign 'F'.",
          "In main(): Declare array of 5 students. For each student, read details and marks, compute average and assign grade. Then display all records.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n\n// Define the structure for a student\nstruct Student {\n    int studentID;\n    char name[50];\n    char grade;\n    float marks[5];\n    float averageMarks;\n};\n\n// Function to calculate the average marks for a student\nvoid calculateAverage(struct Student *student) {\n    float totalMarks = 0.0;\n    for (int i = 0; i < 5; i++) {\n        totalMarks += student->marks[i];\n    }\n    student->averageMarks = totalMarks / 5;\n}\n\n// Function to assign grades based on average marks\nvoid assignGrades(struct Student *student) {\n    if (student->averageMarks >= 90) {\n        student->grade = 'A';\n    } else if (student->averageMarks >= 80) {\n        student->grade = 'B';\n    } else if (student->averageMarks >= 70) {\n        student->grade = 'C';\n    } else if (student->averageMarks >= 60) {\n        student->grade = 'D';\n    } else {\n        student->grade = 'F';\n    }\n}\n\nint main() {\n    struct Student students[5];\n\n    // Input student information\n    for (int i = 0; i < 5; i++)\n    {\n        printf(\"Enter Student ID: \");\n        scanf(\"%d\", &students[i].studentID);\n        printf(\"Enter Name: \");\n        scanf(\"%s\", students[i].name);\n\n        printf(\"Enter marks for 5 subjects:\\n\");\n        for (int j = 0; j < 5; j++)\n        {\n            printf(\"Subject %d: \", j + 1);\n            scanf(\"%f\", &students[i].marks[j]);\n        }\n\n        // Calculate average marks and assign grades\n        calculateAverage(&students[i]);\n        assignGrades(&students[i]);\n    }\n\n    // Display student information\n    printf(\"\\nStudent Information:\\n\");\n    for (int i = 0; i < 5; i++)\n    {\n        printf(\"Student ID: %d\\n\", students[i].studentID);\n        printf(\"Name: %s\\n\", students[i].name);\n        printf(\"Average Marks: %.2f\\n\", students[i].averageMarks);\n        printf(\"Grade: %c\\n\", students[i].grade);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
      },
      {
        "number": "3. b.",
        "title": "3. b.",
        "subtitle": "Student Academic System (Pointer to Structure)",
        "question": "3. b. A school wants to develop a student academic system to track student progress and generate reports for teachers and parents. The system should store the following information for each student: Student ID, Name, Grade, Subject, Marks. The system should also be able to do the following operations:\n\ni. Calculate the average marks for each student.\nii. Assign grades based on the average marks. Conditions\niii. Must use array of structures.\niv. Use pointer to structure to access the members of the structure.\nv. Enter marks for minimum of 5 students with subjects each.\n\nInstructions to Faculties\nIf needed, please take extra lab hours in subsequent week to complete this experiment in detail. The concepts discussed in this experiment will make solid foundation for the forthcoming experiments namely (stack using linked list, queue using linked list, singly linked list, doubly linked list, circular linked list).",
        "algorithm": [
          "Start the program.",
          "Define struct Student with studentID, name, grade, marks[5], and averageMarks.",
          "Define calculateAverage and assignGrades using pointers to structure.",
          "In main(): Declare array of 5 students and initialize pointer studentPtr = students.",
          "Loop 5 times: Input studentID, name, marks using studentPtr->, call calculateAverage(studentPtr) and assignGrades(studentPtr), then increment studentPtr++.",
          "Reset studentPtr = students.",
          "Loop 5 times: Display student information via studentPtr-> and increment studentPtr++.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n\n// Define the structure for a student\nstruct Student {\n    int studentID;\n    char name[50];\n    char grade;\n    float marks[5];\n    float averageMarks;\n};\n\n// Function to calculate the average marks for a student\nvoid calculateAverage(struct Student *student) {\n    float totalMarks = 0.0;\n    for (int i = 0; i < 5; i++) {\n        totalMarks += student->marks[i];\n    }\n    student->averageMarks = totalMarks / 5;\n}\n\n// Function to assign grades based on average marks\nvoid assignGrades(struct Student *student) {\n    if (student->averageMarks >= 90) {\n        student->grade = 'A';\n    } else if (student->averageMarks >= 80) {\n        student->grade = 'B';\n    } else if (student->averageMarks >= 70) {\n        student->grade = 'C';\n    } else if (student->averageMarks >= 60) {\n        student->grade = 'D';\n    } else {\n        student->grade = 'F';\n    }\n}\n\nint main() {\n    struct Student students[5];\n    struct Student *studentPtr = students;\n\n    // Input student information\n    for (int i = 0; i < 5; i++)\n    {\n        printf(\"Enter Student ID: \");\n        scanf(\"%d\", &studentPtr->studentID);\n        printf(\"Enter Name: \");\n        scanf(\"%s\", studentPtr->name);\n\n        printf(\"Enter marks for 5 subjects:\\n\");\n        for (int j = 0; j < 5; j++)\n        {\n            printf(\"Subject %d: \", j + 1);\n            scanf(\"%f\", &studentPtr->marks[j]);\n        }\n\n        // Calculate average marks and assign grades\n        calculateAverage(studentPtr);\n        assignGrades(studentPtr);\n\n        // Move to the next student in the array\n        studentPtr++;\n    }\n\n    // Reset the pointer to the beginning of the array\n    studentPtr = students;\n\n    // Display student information\n    printf(\"\\nStudent Information:\\n\");\n    for (int i = 0; i < 5; i++)\n    {\n        printf(\"Student ID: %d\\n\", studentPtr->studentID);\n        printf(\"Name: %s\\n\", studentPtr->name);\n        printf(\"Average Marks: %.2f\\n\", studentPtr->averageMarks);\n        printf(\"Grade: %c\\n\", studentPtr->grade);\n        printf(\"\\n\");\n\n        // Move to the next student in the array\n        studentPtr++;\n    }\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-4",
    "num": 4,
    "title": "Experiment 4: Stacks",
    "shortName": "Stacks",
    "desc": "Stack implementation using linked list & web browser history tracker",
    "subquestions": [
      {
        "number": "4. a.",
        "title": "4. a.",
        "subtitle": "Stack using Linked List (Push, Pop, isEmpty)",
        "question": "4. a. Write a C program to implement a stack using a linked list (instead of an array) and implement push, pop, and isEmpty operations.",
        "algorithm": [
          "Start the program.",
          "Define struct Node with int data and next pointer; define struct Stack with top pointer.",
          "Define createStack(): Allocate Stack, set top = NULL, return pointer.",
          "Define isEmpty(stack): Return 1 if stack->top == NULL, else return 0.",
          "Define push(stack, data): Allocate newNode with data, link newNode->next = stack->top, update stack->top = newNode, and display confirmation message.",
          "Define pop(stack): If isEmpty(stack) return error -1; else extract data, advance stack->top = temp->next, free temp node, and return data.",
          "In main(): Create stack, push 10, 20, 30; pop and display values (including popping from empty stack); free stack.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Define a structure for a node in the linked list\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\n// Define a structure for the stack\nstruct Stack {\n    struct Node* top;\n};\n\n// Function to create an empty stack\nstruct Stack* createStack() {\n    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));\n    stack->top = NULL;\n    return stack;\n}\n\n// Function to check if the stack is empty\nint isEmpty(struct Stack* stack) {\n    return (stack->top == NULL);\n}\n\n// Function to push an element onto the stack\nvoid push(struct Stack* stack, int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = stack->top;\n    stack->top = newNode;\n    printf(\"%d pushed to the stack\\n\", data);\n}\n\n// Function to pop an element from the stack\nint pop(struct Stack* stack) {\n    if (isEmpty(stack)) {\n        printf(\"Stack is empty. Cannot pop.\\n\");\n        return -1; // Return an invalid value\n    }\n    struct Node* temp = stack->top;\n    int poppedData = temp->data;\n    stack->top = temp->next;\n    free(temp);\n    return poppedData;\n}\n\nint main() {\n    struct Stack* stack = createStack();\n\n    push(stack, 10);\n    push(stack, 20);\n    push(stack, 30);\n\n    printf(\"%d popped from the stack\\n\", pop(stack));\n    printf(\"%d popped from the stack\\n\", pop(stack));\n    printf(\"%d popped from the stack\\n\", pop(stack));\n    printf(\"%d popped from the stack\\n\", pop(stack)); // Trying to pop from an empty stack\n\n    free(stack);\n    return 0;\n}"
      },
      {
        "number": "4. b.",
        "title": "4. b.",
        "subtitle": "Web Browser History Tracker",
        "question": "4. b. Design a web browser history tracker using a stack of visited URLs: push a URL on visiting a site, pop on going back, and display the current URL. Provide a menu -driven interface.\n\nOperations\ni. Visit a URL (push)\nii. Go Back (pop)\niii. Display Current URL\n\ni. Visit a URL: The program prompts the user to enter the URL (Uniform Resource Locator) they want to visit. The user enters the web address (e.g., ” https://www.example.com”) or a specific webpage URL. After the user provides the URL, the program creates a new node containing this URL and pushes it onto the stac k. This action simulates the user’s movement to a new web page. Additionally check if the stack overflow condition for insertion.\nii. Navigating Backward: In your C program for the web browser history tracker, ensure that users can navigate backward through their browsing history by popping URLs from the stack and displaying the current URL. Provide a mechanism for handling the case when there are no more URLs to go back to.\niii. Displaying Current URL: In your web browser history tracker program, create a functio n that displays the current URL that the user is on. Ensure that it correctly reflects the URL on the top of the stack.",
        "algorithm": [
          "Start the program.",
          "Define struct Node with char url[100] and next pointer; define struct Stack with top pointer.",
          "Define initialize(stack): Set stack->top = NULL.",
          "Define push(stack, url): Allocate newNode, copy url, link newNode->next = stack->top, and set stack->top = newNode.",
          "Define pop(stack): If stack->top == NULL print empty message; else set temp = stack->top, advance stack->top = stack->top->next, and free temp.",
          "Define displayCurrentURL(stack): If stack is empty print \"No URL currently loaded.\"; else print top URL.",
          "In main(): Initialize historyStack, run interactive menu loop (1. Visit, 2. Go Back, 3. Display Current, 4. Exit). Free nodes on exit.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_URL_LENGTH 100\n\n// Structure for a node in the stack\ntypedef struct Node {\n    char url[MAX_URL_LENGTH];\n    struct Node* next;\n} Node;\n\n// Structure for the stack\ntypedef struct {\n    Node* top;\n} Stack;\n\n// Function to initialize an empty stack\nvoid initialize(Stack* stack) {\n    stack->top = NULL;\n}\n\n// Function to push a URL onto the stack\nvoid push(Stack* stack, const char* url) {\n    Node* newNode = (Node*)malloc(sizeof(Node));\n    if (newNode == NULL) {\n        printf(\"Memory allocation failed.\\n\");\n        return;\n    }\n    strncpy(newNode->url, url, MAX_URL_LENGTH - 1);\n    newNode->url[MAX_URL_LENGTH - 1] = '\\0';\n    newNode->next = stack->top;\n    stack->top = newNode;\n}\n\n// Function to pop a URL from the stack\nvoid pop(Stack* stack) {\n    if (stack->top == NULL) {\n        printf(\"No more URLs in the history.\\n\");\n        return;\n    }\n    Node* temp = stack->top;\n    stack->top = stack->top->next;\n    free(temp);\n}\n\n// Function to display the current URL\nvoid displayCurrentURL(Stack* stack) {\n    if (stack->top == NULL) {\n        printf(\"No URL currently loaded.\\n\");\n    } else {\n        printf(\"Current URL: %s\\n\", stack->top->url);\n    }\n}\n\nint main() {\n    Stack historyStack;\n    initialize(&historyStack);\n\n    int choice;\n    char url[MAX_URL_LENGTH];\n\n    while (1) {\n        printf(\"\\nMenu:\\n\");\n        printf(\"1. Visit a URL\\n\");\n        printf(\"2. Go Back\\n\");\n        printf(\"3. Display Current URL\\n\");\n        printf(\"4. Exit\\n\");\n        printf(\"Enter your choice: \");\n        scanf(\"%d\", &choice);\n\n        switch (choice) {\n            case 1:\n                printf(\"Enter URL to visit: \");\n                scanf(\"%s\", url);\n                push(&historyStack, url);\n                break;\n            case 2:\n                pop(&historyStack);\n                break;\n            case 3:\n                displayCurrentURL(&historyStack);\n                break;\n            case 4:\n                // Clean up and exit\n                while (historyStack.top != NULL) {\n                    pop(&historyStack);\n                }\n                return 0;\n            default:\n                printf(\"Invalid choice. Please try again.\\n\");\n        }\n    }\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-5",
    "num": 5,
    "title": "Experiment 5: Queues",
    "shortName": "Queues",
    "desc": "Queue implementation using singly linked list & cinema ticket queue simulation",
    "subquestions": [
      {
        "number": "1. a.",
        "title": "1. a.",
        "subtitle": "Queue using Singly Linked List",
        "question": "1. a. Write a C program to implement a queue using a singly linked list, with following functionalities.\n\n1. Initialize an empty queue.\n2. Enqueue (add) an element to the rear of the queue.\n3. Dequeue (remove) an element from the front of the queue.\n4. Display the elements of the queue.",
        "algorithm": [
          "Start the program.",
          "Define struct Node with int data and next pointer; define struct Queue with front and rear pointers.",
          "Define createQueue(): Allocate Queue memory, set front = rear = NULL, return pointer.",
          "Define isEmpty(queue): Return 1 if front == NULL, else return 0.",
          "Define enqueue(queue, data): Allocate newNode with data; if empty set front = rear = newNode; else link rear->next = newNode and set rear = newNode.",
          "Define dequeue(queue): If empty print underflow and return -1; else extract data from front, advance front = front->next (if front becomes NULL set rear = NULL), free old front, and return data.",
          "Define display(queue): If empty print empty message; else traverse from front to NULL and print each element.",
          "In main(): Enqueue 10, 20, 30; display queue; dequeue an element and display; check isEmpty; free queue.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Structure to represent a node in the linked list\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\n// Structure to represent a queue\nstruct Queue {\n    struct Node* front;\n    struct Node* rear;\n};\n\n// Function to initialize an empty queue\nstruct Queue* createQueue() {\n    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));\n    queue->front = queue->rear = NULL;\n    return queue;\n}\n\n// Function to check if the queue is empty\nint isEmpty(struct Queue* queue) {\n    return (queue->front == NULL);\n}\n\n// Function to enqueue an element to the rear of the queue\nvoid enqueue(struct Queue* queue, int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    if (isEmpty(queue)) {\n        queue->front = queue->rear = newNode;\n    } else {\n        queue->rear->next = newNode;\n        queue->rear = newNode;\n    }\n}\n\n// Function to dequeue an element from the front of the queue\nint dequeue(struct Queue* queue) {\n    if (isEmpty(queue)) {\n        printf(\"Queue underflow: Cannot dequeue from an empty queue.\\n\");\n        return -1; // Error value\n    }\n    struct Node* temp = queue->front;\n    int data = temp->data;\n    queue->front = queue->front->next;\n    if (queue->front == NULL) queue->rear = NULL;\n    free(temp);\n    return data;\n}\n\n// Function to display the elements of the queue\nvoid display(struct Queue* queue) {\n    if (isEmpty(queue)) {\n        printf(\"Queue is empty.\\n\");\n        return;\n    }\n    struct Node* current = queue->front;\n    printf(\"Queue elements: \");\n    while (current != NULL) {\n        printf(\"%d \", current->data);\n        current = current->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct Queue* queue = createQueue();\n\n    enqueue(queue, 10);\n    enqueue(queue, 20);\n    enqueue(queue, 30);\n    display(queue);\n\n    printf(\"Dequeued element: %d\\n\", dequeue(queue));\n    display(queue);\n\n    printf(\"Is the queue empty? %s\\n\", isEmpty(queue) ? \"Yes\" : \"No\");\n\n    free(queue);\n    return 0;\n}"
      },
      {
        "number": "5. b.",
        "title": "5. b.",
        "subtitle": "Cinema Ticket Queue System",
        "question": "5. b. Imagine you are responsible for designing a queue-based system to manage the queue of regular customers waiting to purchase cinema tickets at a popular movie theatre. Your system should ensure fair and efficient ticket sales for all customers. When a customer’s arrive at the cinema, they join the queue. Each customer is represented as name, age (for record -keeping), and number of tickets needed. When a customer reaches the front of the queue, they are served by the ticketing agent. Im plement a ticket sale process where the agent provides the customer with the requested ticket(s). Initialize the total number of tickets and if the tickets are sold, then ticketing agent should display a houseful message.",
        "algorithm": [
          "Start the program.",
          "Define struct Customer with name[50], age, numTickets, and next pointer; define struct Queue with front and rear pointers.",
          "Define createQueue(), isEmpty(), and enqueue(queue, customer) functions.",
          "In main(): Set totalTickets = 100 and create ticketQueue.",
          "While totalTickets > 0: read customer name, age, and numTickets. If numTickets <= totalTickets, decrement totalTickets, enqueue customer, and print confirmation; else print insufficient tickets message. If totalTickets == 0, break. Prompt to continue (1 for yes, 0 for no).",
          "If totalTickets == 0 print \"Houseful! All tickets are sold.\"; else print remaining unsold tickets.",
          "Free customer nodes and ticketQueue.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Structure to represent a customer\nstruct Customer {\n    char name[50];\n    int age;\n    int numTickets;\n    struct Customer* next;\n};\n\n// Structure to represent the queue\nstruct Queue {\n    struct Customer* front;\n    struct Customer* rear;\n};\n\n// Initialize a queue\nstruct Queue* createQueue() {\n    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));\n    queue->front = queue->rear = NULL;\n    return queue;\n}\n\n// Check if the queue is empty\nint isEmpty(struct Queue* queue) {\n    return (queue->front == NULL);\n}\n\n// Add a customer to the rear of the queue\nvoid enqueue(struct Queue* queue, struct Customer customer) {\n    struct Customer* newNode = (struct Customer*)malloc(sizeof(struct Customer));\n    *newNode = customer;\n    newNode->next = NULL;\n    if (isEmpty(queue)) {\n        queue->front = queue->rear = newNode;\n    } else {\n        queue->rear->next = newNode;\n        queue->rear = newNode;\n    }\n}\n\nint main() {\n    // Total number of tickets available\n    int totalTickets = 100;\n    struct Queue* ticketQueue = createQueue();\n\n    while (totalTickets > 0)\n    {\n        struct Customer customer;\n        printf(\"Enter customer name: \");\n        scanf(\"%s\", customer.name);\n        printf(\"Enter customer age: \");\n        scanf(\"%d\", &customer.age);\n        printf(\"Enter number of tickets needed: \");\n        scanf(\"%d\", &customer.numTickets);\n\n        if (customer.numTickets <= totalTickets)\n        {\n            totalTickets -= customer.numTickets;\n            enqueue(ticketQueue, customer);\n            printf(\"Tickets sold to %s (%d tickets remaining)\\n\", customer.name, totalTickets);\n        }\n        else\n        {\n            printf(\"Insufficient tickets available. Tickets not sold to %s\\n\", customer.name);\n        }\n\n        if (totalTickets == 0) {\n            break;\n        }\n\n        printf(\"Do you want to add another customer? (1 for yes, 0 for no): \");\n        int choice;\n        scanf(\"%d\", &choice);\n        if (choice != 1)\n        {\n            break;\n        }\n    }\n\n    if (totalTickets == 0) {\n        printf(\"Houseful! All tickets are sold.\\n\");\n    } else {\n        printf(\"Ticket sales closed. %d tickets remain unsold.\\n\", totalTickets);\n    }\n\n    // free the queue\n    struct Customer* cur = ticketQueue->front;\n    while (cur != NULL) {\n        struct Customer* tmp = cur;\n        cur = cur->next;\n        free(tmp);\n    }\n    free(ticketQueue);\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-6",
    "num": 6,
    "title": "Experiment 6: Singly Linked Lists",
    "shortName": "Singly Linked Lists",
    "desc": "Complete CRUD operations & pairwise swap of adjacent nodes",
    "subquestions": [
      {
        "number": "6. a.",
        "title": "6. a.",
        "subtitle": "Singly Linked List Operations",
        "question": "6. a. Write a C program to implement a singly linked list. The program should allow the user to perform the following operations:\ni. Insert a node at the beginning of the list.\nii. Insert a node at the end of the list.\niii. Delete a node by value.\niv. Display the linked list.\n\nAdditionally, ensure that you handle edge cases gracefully, such as an empty list or attempting to delete a node that does not exist.",
        "algorithm": [
          "Start the program.",
          "Define struct Node with int data and next pointer.",
          "Define insertAtBeginning(head, value): Allocate newNode, set next = head, return newNode.",
          "Define insertAtEnd(head, value): Allocate newNode, set next = NULL; if head is NULL return newNode; traverse to end, link current->next = newNode, return head.",
          "Define deleteByValue(head, value): If head is NULL return NULL; if head->data == value update head = head->next, free old head, return head; traverse to preceding node; unlink and free target node; if not found print message; return head.",
          "Define displayList(head): Traverse and print data -> for each node, ending with NULL.",
          "In main(): Present interactive menu: 1. Insert front, 2. Insert end, 3. Delete by value, 4. Display, 5. Exit. Free all nodes on exit.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Define a structure for a node in the linked list\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\n// Function to insert a node at the beginning of the list\nstruct Node* insertAtBeginning(struct Node* head, int value) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    if (newNode == NULL) {\n        printf(\"Memory allocation failed.\\n\");\n        return head;\n    }\n    newNode->data = value;\n    newNode->next = head;\n    return newNode;\n}\n\n// Function to insert a node at the end of the list\nstruct Node* insertAtEnd(struct Node* head, int value) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    if (newNode == NULL) {\n        printf(\"Memory allocation failed.\\n\");\n        return head;\n    }\n    newNode->data = value;\n    newNode->next = NULL;\n\n    if (head == NULL) {\n        return newNode;\n    }\n    struct Node* current = head;\n    while (current->next != NULL) {\n        current = current->next;\n    }\n    current->next = newNode;\n    return head;\n}\n\n// Function to delete a node by value\nstruct Node* deleteByValue(struct Node* head, int value) {\n    if (head == NULL) {\n        printf(\"List is empty. Cannot delete.\\n\");\n        return head;\n    }\n    if (head->data == value) {\n        struct Node* temp = head;\n        head = head->next;\n        free(temp);\n        return head;\n    }\n    struct Node* current = head;\n    while (current->next != NULL && current->next->data != value) {\n        current = current->next;\n    }\n    if (current->next == NULL) {\n        printf(\"Value not found in the list. Cannot delete.\\n\");\n        return head;\n    }\n    struct Node* temp = current->next;\n    current->next = current->next->next;\n    free(temp);\n    return head;\n}\n\n// Function to display the linked list\nvoid displayList(struct Node* head) {\n    printf(\"Linked List: \");\n    struct Node* current = head;\n    while (current != NULL) {\n        printf(\"%d -> \", current->data);\n        current = current->next;\n    }\n    printf(\"NULL\\n\");\n}\n\nint main() {\n    struct Node* head = NULL;\n    int choice, value;\n\n    while (1) {\n        printf(\"\\nMenu:\\n\");\n        printf(\"1. Insert at the beginning\\n\");\n        printf(\"2. Insert at the end\\n\");\n        printf(\"3. Delete by value\\n\");\n        printf(\"4. Display\\n\");\n        printf(\"5. Exit\\n\");\n        printf(\"Enter your choice: \");\n        scanf(\"%d\", &choice);\n\n        switch (choice) {\n            case 1:\n                printf(\"Enter a value to insert: \");\n                scanf(\"%d\", &value);\n                head = insertAtBeginning(head, value);\n                break;\n            case 2:\n                printf(\"Enter a value to insert: \");\n                scanf(\"%d\", &value);\n                head = insertAtEnd(head, value);\n                break;\n            case 3:\n                printf(\"Enter a value to delete: \");\n                scanf(\"%d\", &value);\n                head = deleteByValue(head, value);\n                break;\n            case 4:\n                displayList(head);\n                break;\n            case 5:\n                // Clean up and exit\n                while (head != NULL) {\n                    struct Node* temp = head;\n                    head = head->next;\n                    free(temp);\n                }\n                return 0;\n            default:\n                printf(\"Invalid choice. Please try again.\\n\");\n        }\n    }\n\n    return 0;\n}"
      },
      {
        "number": "6. b.",
        "title": "6. b.",
        "subtitle": "Swap Adjacent Nodes in Linked List",
        "question": "6. b. Given a singly linked list (e.g. 1→2→3→4→5), swap every pair of adjacent nodes (not just their values) so the list becomes 2→1→4→3→5. If the list has an odd number of nodes, the last node stays in place. Task: Your task is to swap every two adjacent nodes in the list and return the new head of the modifiedlist.Inotherwords,youneedtorearrangethenodessothatthelinkedlistnowlooks like 2 -> 1 -> 4 -> 3 -> 5.\n\nConstraints: You are not allowed to modify the values in the nodes. Only the nodes themselves may be changed. If the number of nodes in the linked list is odd, the last node should remain in its original position.",
        "algorithm": [
          "Start the program.",
          "Define struct ListNode with int val and next pointer.",
          "Define helper newNode(value) to allocate and return a node.",
          "Define swapPairs(head):",
          [
            "If head is NULL or head->next is NULL, return head.",
            "Set newHead = head->next, prevPair = NULL, and current = head.",
            "While current != NULL and current->next != NULL: set nextNode = current->next, afterPair = nextNode->next; adjust pointers: nextNode->next = current, current->next = afterPair; if prevPair != NULL set prevPair->next = nextNode; update prevPair = current and current = afterPair.",
            "Return newHead."
          ],
          "Define printList(head) to print list elements.",
          "In main(): Build 1 -> 2 -> 3 -> 4 -> 5, print original, swap pairs, print modified list, free memory.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Define the structure for a node in the linked list\nstruct ListNode {\n    int val;\n    struct ListNode* next;\n};\n\n// Function to swap every two adjacent nodes in the linked list\nstruct ListNode* swapPairs(struct ListNode* head) {\n    // Check if the list is empty or has only one node\n    if (head == NULL || head->next == NULL) {\n        return head;\n    }\n\n    struct ListNode* newHead = head->next;\n    struct ListNode* prevPair = NULL;\n    struct ListNode* current = head;\n\n    while (current != NULL && current->next != NULL) {\n        struct ListNode* nextNode = current->next;\n        struct ListNode* afterPair = nextNode->next;\n\n        // Swap the pair\n        nextNode->next = current;\n        current->next = afterPair;\n\n        // Connect previous pair to this pair\n        if (prevPair != NULL) {\n            prevPair->next = nextNode;\n        }\n\n        prevPair = current;\n        current = afterPair;\n    }\n\n    return newHead;\n}\n\n// Function to print the linked list\nvoid printList(struct ListNode* head) {\n    struct ListNode* current = head;\n    while (current != NULL) {\n        printf(\"%d -> \", current->val);\n        current = current->next;\n    }\n    printf(\"NULL\\n\");\n}\n\n// Function to create a new node with a given value\nstruct ListNode* newNode(int value) {\n    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));\n    if (node != NULL) {\n        node->val = value;\n        node->next = NULL;\n    }\n    return node;\n}\n\nint main() {\n    // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5\n    struct ListNode* head = newNode(1);\n    head->next = newNode(2);\n    head->next->next = newNode(3);\n    head->next->next->next = newNode(4);\n    head->next->next->next->next = newNode(5);\n\n    printf(\"Original Linked List: \");\n    printList(head);\n\n    // Swap adjacent nodes\n    head = swapPairs(head);\n\n    printf(\"Modified Linked List: \");\n    printList(head);\n\n    // Clean up memory\n    while (head != NULL) {\n        struct ListNode* temp = head;\n        head = head->next;\n        free(temp);\n    }\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-7",
    "num": 7,
    "title": "Experiment 7: Doubly Linked Lists",
    "shortName": "Doubly Linked Lists",
    "desc": "Doubly linked list primitives & online shopping cart implementation",
    "subquestions": [
      {
        "number": "7. a.",
        "title": "7. a.",
        "subtitle": "Doubly Linked List Operations",
        "question": "7. a. Write a C program to implement a doubly linked list data structure from scratch. The program should provide the following functionalities:\n\ni. Initialize an empty doubly linked list.\nii. Insert a new node at the beginning of the list.\niii. Insert a new node at the end of the list.\niv. Insert a new node at a given position.\nv. Delete a node with a given value from the list.\nvi. Display the elements of the list.",
        "algorithm": [
          "Start the program.",
          "Define struct Node with data, prev, next; define struct DoublyLinkedList with head.",
          "Define initializeList(list): Set list->head = NULL.",
          "Define insertAtBeginning(list, data): Allocate newNode; set next = head, prev = NULL; update head->prev if not null; set head = newNode.",
          "Define insertAtEnd(list, data): Allocate newNode; if empty set head = newNode; else traverse to end, link current->next = newNode, newNode->prev = current.",
          "Define insertAtPosition(list, data, position): Validate position; traverse to position; link newNode between current->prev and current.",
          "Define deleteNode(list, value): Traverse to find node; update neighbors' prev and next pointers; free node.",
          "Define displayList(list): Traverse and print node data elements.",
          "In main(): Initialize list, insert 10 at front, 20 at end, 15 at pos 1; display; delete 20; display; free memory.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Structure to represent a doubly linked list node\nstruct Node {\n    int data;\n    struct Node* prev;\n    struct Node* next;\n};\n\n// Structure to represent a doubly linked list\nstruct DoublyLinkedList {\n    struct Node* head;\n};\n\n// Function to initialize an empty doubly linked list\nvoid initializeList(struct DoublyLinkedList* list) {\n    list->head = NULL;\n}\n\n// Function to insert a new node at the beginning of the list\nvoid insertAtBeginning(struct DoublyLinkedList* list, int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->prev = NULL;\n    newNode->next = list->head;\n    if (list->head != NULL) {\n        list->head->prev = newNode;\n    }\n    list->head = newNode;\n}\n\n// Function to insert a new node at the end of the list\nvoid insertAtEnd(struct DoublyLinkedList* list, int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->prev = NULL;\n    newNode->next = NULL;\n    if (list->head == NULL) {\n        list->head = newNode;\n        return;\n    }\n    struct Node* current = list->head;\n    while (current->next != NULL) {\n        current = current->next;\n    }\n    current->next = newNode;\n    newNode->prev = current;\n}\n\n// Function to insert a new node at a given position\nvoid insertAtPosition(struct DoublyLinkedList* list, int data, int position) {\n    if (position < 0) {\n        printf(\"Invalid position.\\n\");\n        return;\n    }\n    if (position == 0) {\n        insertAtBeginning(list, data);\n        return;\n    }\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->prev = NULL;\n    newNode->next = NULL;\n\n    struct Node* current = list->head;\n    int currentPosition = 0;\n    while (current != NULL && currentPosition < position)\n    {\n        current = current->next;\n        currentPosition++;\n    }\n\n    if (current == NULL) {\n        printf(\"Position out of range.\\n\");\n        free(newNode);\n        return;\n    }\n    newNode->prev = current->prev;\n    newNode->next = current;\n    if (current->prev != NULL) {\n        current->prev->next = newNode;\n    } else {\n        list->head = newNode;\n    }\n    current->prev = newNode;\n}\n\n// Function to delete a node with a given value from the list\nvoid deleteNode(struct DoublyLinkedList* list, int value) {\n    struct Node* current = list->head;\n    while (current != NULL) {\n        if (current->data == value) {\n            if (current->prev != NULL) {\n                current->prev->next = current->next;\n            } else {\n                list->head = current->next;\n            }\n            if (current->next != NULL) {\n                current->next->prev = current->prev;\n            }\n            free(current);\n            return;\n        }\n        current = current->next;\n    }\n    printf(\"Value %d not found in the list.\\n\", value);\n}\n\n// Function to display the elements of the list\nvoid displayList(struct DoublyLinkedList* list) {\n    struct Node* current = list->head;\n    if (current == NULL) {\n        printf(\"The list is empty.\\n\");\n        return;\n    }\n    printf(\"Doubly Linked List: \");\n    while (current != NULL) {\n        printf(\"%d \", current->data);\n        current = current->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    struct DoublyLinkedList myList;\n    initializeList(&myList);\n\n    insertAtBeginning(&myList, 10);\n    insertAtEnd(&myList, 20);\n    insertAtPosition(&myList, 15, 1);\n    displayList(&myList);\n    deleteNode(&myList, 20);\n    displayList(&myList);\n\n    // free remaining nodes\n    struct Node* cur = myList.head;\n    while (cur != NULL) {\n        struct Node* tmp = cur;\n        cur = cur->next;\n        free(tmp);\n    }\n    return 0;\n}"
      },
      {
        "number": "7. b.",
        "title": "7. b.",
        "subtitle": "Online Shopping Cart",
        "question": "7. b. (Optional Question) (Optional) Implement an online shopping cart using a doubly linked list: add items (name, price, quantity), remove an item by name, display the cart forward, and calculate the total cost. Your program should provide the following functionalities:\n\ni. Initialize an empty shopping cart\nii. Add items to the cart: Allow the user to add items to the shopping cart by entering the item’s name, price, and quantity.\niii. Remove items from the cart: Allow the user to remove items from the cart by entering the item’s name. If the item is not found, display an appropriate message.\niv. Display the cart: Provide an option to display the items in the shopping cart in both forward and backward directions, including their names, prices, quantities, and total cost per item.\nv. Calculate the total cost: Calculate and display the total cost of all items in the shopping cart.",
        "algorithm": [
          "Start the program.",
          "Define struct CartItem with name[100], price, quantity, next, prev; define struct ShoppingCart with head and tail.",
          "Define initializeCart(cart): Set head = tail = NULL.",
          "Define addItem(cart, name, price, quantity): Allocate CartItem, append to tail, maintain prev and next.",
          "Define removeItem(cart, name): Search item using strcmp(); unlink node and free; if not found print error message.",
          "Define displayCartForward(cart): Traverse from head and display item name, price, quantity, and total item cost.",
          "Define displayTotalCost(cart): Accumulate sum of price * quantity for all items and display total.",
          "In main(): Add Product A, B, C; display cart; remove Product B; display updated cart; display total cost; free nodes.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Structure to represent an item in the shopping cart\nstruct CartItem {\n    char name[100];\n    float price;\n    int quantity;\n    struct CartItem* next;\n    struct CartItem* prev;\n};\n\n// Structure to represent the shopping cart\nstruct ShoppingCart {\n    struct CartItem* head;\n    struct CartItem* tail;\n};\n\n// Function to initialize an empty shopping cart\nvoid initializeCart(struct ShoppingCart* cart) {\n    cart->head = NULL;\n    cart->tail = NULL;\n}\n\n// Function to add items to the cart\nvoid addItem(struct ShoppingCart* cart, const char* name, float price, int quantity) {\n    struct CartItem* newItem = (struct CartItem*)malloc(sizeof(struct CartItem));\n    strncpy(newItem->name, name, sizeof(newItem->name) - 1);\n    newItem->name[sizeof(newItem->name) - 1] = '\\0';\n    newItem->price = price;\n    newItem->quantity = quantity;\n    newItem->next = NULL;\n    newItem->prev = cart->tail;\n\n    if (cart->tail != NULL)\n    {\n        cart->tail->next = newItem;\n    }\n    cart->tail = newItem;\n    if (cart->head == NULL)\n    {\n        cart->head = newItem;\n    }\n}\n\n// Function to remove items from the cart by name\nvoid removeItem(struct ShoppingCart* cart, const char* name) {\n    struct CartItem* current = cart->head;\n    while (current != NULL) {\n        if (strcmp(current->name, name) == 0) {\n            if (current->prev != NULL) {\n                current->prev->next = current->next;\n            } else {\n                cart->head = current->next;\n            }\n            if (current->next != NULL) {\n                current->next->prev = current->prev;\n            } else {\n                cart->tail = current->prev;\n            }\n            free(current);\n            return;\n        }\n        current = current->next;\n    }\n    printf(\"Item '%s' not found in the cart.\\n\", name);\n}\n\n// Function to display the cart in forward direction\nvoid displayCartForward(struct ShoppingCart* cart) {\n    struct CartItem* current = cart->head;\n    printf(\"Shopping Cart:\\n\");\n    while (current != NULL) {\n        printf(\"Name: %s, Price: $%.2f, Quantity: %d, Total Cost: $%.2f\\n\",\n               current->name, current->price, current->quantity, current->price * current->quantity);\n        current = current->next;\n    }\n    printf(\"\\n\");\n}\n\n// Function to calculate and display the total cost of items in the cart\nvoid displayTotalCost(struct ShoppingCart* cart) {\n    struct CartItem* current = cart->head;\n    float totalCost = 0.0;\n    while (current != NULL) {\n        totalCost += (current->price * current->quantity);\n        current = current->next;\n    }\n    printf(\"Total Cost of Items in the Cart: $%.2f\\n\", totalCost);\n}\n\nint main() {\n    struct ShoppingCart myCart;\n    initializeCart(&myCart);\n\n    // Add items to the cart\n    addItem(&myCart, \"Product A\", 10.99, 2);\n    addItem(&myCart, \"Product B\", 5.49, 3);\n    addItem(&myCart, \"Product C\", 2.99, 1);\n\n    // Display the cart\n    displayCartForward(&myCart);\n\n    // Remove an item from the cart\n    removeItem(&myCart, \"Product B\");\n\n    // Display the updated cart\n    displayCartForward(&myCart);\n\n    // Calculate and display the total cost\n    displayTotalCost(&myCart);\n\n    // free remaining nodes\n    struct CartItem* cur = myCart.head;\n    while (cur != NULL) {\n        struct CartItem* tmp = cur;\n        cur = cur->next;\n        free(tmp);\n    }\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-8",
    "num": 8,
    "title": "Experiment 8: Circular Linked Lists",
    "shortName": "Circular Linked Lists",
    "desc": "Circular queue with wraparound & circular linked list music playlist",
    "subquestions": [
      {
        "number": "8. a.",
        "title": "8. a.",
        "subtitle": "Circular Queue using Circular Linked List",
        "question": "8. a. Implement a circular queue using a circular linked list supporting enqueue and dequeue, wrapping around correctly and handling empty-queue cases. Enqueue (Insertion): Allow users to add elements to the circular queue. Dequeue (Removal): Implement the ability to remove elements from the circular queue.\n\nEnsure that your circular queue maintains its circula r behavior, meaning that enqueuing elements beyond the queue’s capacity should wrap around to the beginning. Additionally, handle cases when the queue is empty or full gracefully.",
        "algorithm": [
          "Start the program.",
          "Define struct QueueNode with data and next; define struct CircularQueue with front and rear.",
          "Define createCircularQueue(): Allocate memory, initialize front = rear = NULL, return pointer.",
          "Define isEmpty(queue): Return 1 if front == NULL, else return 0.",
          "Define enqueue(queue, value): Allocate newNode; if empty set front = rear = newNode and newNode->next = newNode; else set newNode->next = front, rear->next = newNode, and rear = newNode.",
          "Define dequeue(queue): If empty print underflow; extract data; if front == rear set front = rear = NULL and free node; else set front = temp->next, rear->next = front, and free node; return removed value.",
          "Define displayQueue(queue): If empty print message; else traverse with do...while until returning to front, printing each element.",
          "In main(): Run interactive menu (1. Enqueue, 2. Dequeue, 3. Display, 4. Exit). Free nodes on exit.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Define the structure for a queue node\nstruct QueueNode {\n    int data;\n    struct QueueNode* next;\n};\n\n// Define the circular queue structure\nstruct CircularQueue {\n    struct QueueNode* front;\n    struct QueueNode* rear;\n};\n\n// Function to create an empty circular queue\nstruct CircularQueue* createCircularQueue() {\n    struct CircularQueue* queue = (struct CircularQueue*)malloc(sizeof(struct CircularQueue));\n    if (queue == NULL) {\n        printf(\"Memory allocation failed.\\n\");\n        return NULL;\n    }\n    queue->front = NULL;\n    queue->rear = NULL;\n    return queue;\n}\n\n// Function to check if the circular queue is empty\nint isEmpty(struct CircularQueue* queue) {\n    return (queue->front == NULL);\n}\n\n// Function to enqueue an element into the circular queue\nvoid enqueue(struct CircularQueue* queue, int value) {\n    struct QueueNode* newNode = (struct QueueNode*)malloc(sizeof(struct QueueNode));\n    if (newNode == NULL) {\n        printf(\"Memory allocation failed.\\n\");\n        return;\n    }\n    newNode->data = value;\n    newNode->next = NULL;\n\n    if (isEmpty(queue)) {\n        queue->front = newNode;\n        queue->rear = newNode;\n        newNode->next = newNode; // Circular link to itself\n    } else {\n        newNode->next = queue->front; // Circular link\n        queue->rear->next = newNode;\n        queue->rear = newNode;\n    }\n}\n\n// Function to dequeue an element from the circular queue\nint dequeue(struct CircularQueue* queue) {\n    if (isEmpty(queue)) {\n        printf(\"Queue is empty. Cannot dequeue.\\n\");\n        return -1; // Return a sentinel value for an empty queue\n    }\n    int removedValue;\n    struct QueueNode* temp = queue->front;\n\n    if (queue->front == queue->rear) {\n        removedValue = temp->data;\n        queue->front = NULL;\n        queue->rear = NULL;\n        free(temp);\n    } else {\n        removedValue = temp->data;\n        queue->front = temp->next;\n        queue->rear->next = queue->front; // Circular link\n        free(temp);\n    }\n    return removedValue;\n}\n\n// Function to display the elements in the circular queue\nvoid displayQueue(struct CircularQueue* queue) {\n    if (isEmpty(queue)) {\n        printf(\"Queue is empty.\\n\");\n        return;\n    }\n    struct QueueNode* current = queue->front;\n\n    printf(\"Circular Queue: \");\n    do {\n        printf(\"%d -> \", current->data);\n        current = current->next;\n    } while (current != queue->front);\n    printf(\" (front)\\n\");\n}\n\nint main() {\n    struct CircularQueue* queue = createCircularQueue();\n    int choice, value;\n\n    while (1) {\n        printf(\"\\nMenu:\\n\");\n        printf(\"1. Enqueue\\n\");\n        printf(\"2. Dequeue\\n\");\n        printf(\"3. Display Queue\\n\");\n        printf(\"4. Exit\\n\");\n        printf(\"Enter your choice: \");\n        scanf(\"%d\", &choice);\n\n        switch (choice) {\n            case 1:\n                printf(\"Enter a value to enqueue: \");\n                scanf(\"%d\", &value);\n                enqueue(queue, value);\n                break;\n            case 2:\n                value = dequeue(queue);\n                if (value != -1) {\n                    printf(\"Dequeued value: %d\\n\", value);\n                }\n                break;\n            case 3:\n                displayQueue(queue);\n                break;\n            case 4:\n                while (!isEmpty(queue)) {\n                    dequeue(queue);\n                }\n                free(queue);\n                return 0;\n            default:\n                printf(\"Invalid choice. Please try again.\\n\");\n        }\n    }\n\n    return 0;\n}"
      },
      {
        "number": "8. b.",
        "title": "8. b.",
        "subtitle": "Music Playlist Manager",
        "question": "8. b. Develop a C program to create and manage a music playlist using a circular linked list. Your program should provide the following functionalities:\n\nOperations\ni. Add a Song\nii. Skip to Next Song\niii. Remove Currently Playing Song\niv. Display Currently Playing Song\nv. Display Playlist\n\nAdd a Song: Allow users to add songs to the playlist. Each song has a title and artist name. New songs should be added to the end of the playlist.\n\nSkip to Next Song : Implement an option for users to skip to the next song in the playlist. If the current song is the last one, the program should loop back to the first song.\nRemove Currently Playing Song : Users should be able to remove the currently playing song from the playlist. After removal, the program should automatically start playing the next song.",
        "algorithm": [
          "Start the program.",
          "Define struct Song with title[100], artist[100], and next pointer.",
          "Define createSong(title, artist): Allocate node, copy title and artist, set next = NULL.",
          "Define addSong(playlist, title, artist): Create newSong; if empty link to itself; else find last node, set last->next = newSong, newSong->next = playlist; return playlist.",
          "Define skipToNext(playlist): Return playlist->next.",
          "Define removeCurrentSong(playlist): If empty return NULL; if one node free and return NULL; else find preceding node, link to playlist->next, set temp = playlist, advance playlist = playlist->next, free temp, return playlist.",
          "Define displayCurrentSong(playlist) and displayPlaylist(playlist).",
          "In main(): Run playlist menu (1. Add, 2. Skip, 3. Remove Current, 4. Display Current, 5. Display All, 6. Exit). Free nodes on exit.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Define the structure for a song node\nstruct Song {\n    char title[100];\n    char artist[100];\n    struct Song* next;\n};\n\n// Function to create a new song node\nstruct Song* createSong(const char* title, const char* artist) {\n    struct Song* newSong = (struct Song*)malloc(sizeof(struct Song));\n    if (newSong == NULL) {\n        printf(\"Memory allocation failed.\\n\");\n        return NULL;\n    }\n    strncpy(newSong->title, title, sizeof(newSong->title) - 1);\n    newSong->title[sizeof(newSong->title) - 1] = '\\0';\n    strncpy(newSong->artist, artist, sizeof(newSong->artist) - 1);\n    newSong->artist[sizeof(newSong->artist) - 1] = '\\0';\n    newSong->next = NULL;\n    return newSong;\n}\n\n// Function to add a song to the end of the playlist\nstruct Song* addSong(struct Song* playlist, const char* title, const char* artist) {\n    struct Song* newSong = createSong(title, artist);\n    if (newSong == NULL) {\n        return playlist;\n    }\n    if (playlist == NULL) {\n        playlist = newSong;\n        playlist->next = playlist; // Circular link to itself\n    } else {\n        struct Song* current = playlist;\n        while (current->next != playlist) {\n            current = current->next;\n        }\n        current->next = newSong;\n        newSong->next = playlist;\n    }\n    return playlist;\n}\n\n// Function to skip to the next song\nstruct Song* skipToNext(struct Song* playlist) {\n    if (playlist == NULL) {\n        printf(\"Playlist is empty.\\n\");\n        return playlist;\n    }\n    playlist = playlist->next; // Move to the next song\n    return playlist;\n}\n\n// Function to remove the currently playing song\nstruct Song* removeCurrentSong(struct Song* playlist) {\n    if (playlist == NULL) {\n        printf(\"Playlist is empty.\\n\");\n        return playlist;\n    }\n    if (playlist->next == playlist) { // Only one song in the playlist\n        free(playlist);\n        return NULL;\n    }\n    struct Song* current = playlist;\n    while (current->next != playlist) {\n        current = current->next;\n    }\n    struct Song* temp = playlist;\n    current->next = playlist->next; // Remove the current song from the circular list\n    playlist = playlist->next; // Move to the next song\n    free(temp);\n    return playlist;\n}\n\n// Function to display the currently playing song\nvoid displayCurrentSong(struct Song* playlist) {\n    if (playlist == NULL) {\n        printf(\"Playlist is empty.\\n\");\n    } else {\n        printf(\"Currently Playing: %s by %s\\n\", playlist->title, playlist->artist);\n    }\n}\n\n// Function to display the entire playlist\nvoid displayPlaylist(struct Song* playlist) {\n    if (playlist == NULL) {\n        printf(\"Playlist is empty.\\n\");\n        return;\n    }\n    struct Song* current = playlist;\n    do {\n        printf(\"%s by %s\\n\", current->title, current->artist);\n        current = current->next;\n    } while (current != playlist);\n}\n\nint main() {\n    struct Song* playlist = NULL;\n    int choice;\n    char title[100], artist[100];\n\n    while (1) {\n        printf(\"\\nMenu:\\n\");\n        printf(\"1. Add a Song\\n\");\n        printf(\"2. Skip to Next Song\\n\");\n        printf(\"3. Remove Currently Playing Song\\n\");\n        printf(\"4. Display Currently Playing Song\\n\");\n        printf(\"5. Display Playlist\\n\");\n        printf(\"6. Exit\\n\");\n        printf(\"Enter your choice: \");\n        scanf(\"%d\", &choice);\n\n        switch (choice) {\n            case 1:\n                printf(\"Enter the title of the song: \");\n                scanf(\" %99[^\\n]\", title);\n                printf(\"Enter the artist of the song: \");\n                scanf(\" %99[^\\n]\", artist);\n                playlist = addSong(playlist, title, artist);\n                break;\n            case 2:\n                playlist = skipToNext(playlist);\n                break;\n            case 3:\n                playlist = removeCurrentSong(playlist);\n                break;\n            case 4:\n                displayCurrentSong(playlist);\n                break;\n            case 5:\n                displayPlaylist(playlist);\n                break;\n            case 6:\n                while (playlist != NULL) {\n                    playlist = removeCurrentSong(playlist);\n                }\n                return 0;\n            default:\n                printf(\"Invalid choice. Please try again.\\n\");\n        }\n    }\n\n    return 0;\n}"
      }
    ]
  },
  {
    "id": "exp-9",
    "num": 9,
    "title": "Experiment 9: Binary Search Tree",
    "shortName": "Binary Search Tree",
    "desc": "BST insertion, deletion, min/max finding & inorder traversal",
    "subquestions": [
      {
        "number": "9. a.",
        "title": "9. a.",
        "subtitle": "Binary Search Tree Operations",
        "question": "9. a. Implement a program in C that demonstrates various operations on a binary search tree (BST). Your program should provide the following functionalities:\n\ni. Initialize an empty BST: Initialize an empty binary search tree.\nii. Insert a node: Allow the user to insert nodes in to the BST by entering integer values.\niii. Delete a node: Allow the user to delete a node from the BST by entering a value to be deleted. If the value is not found, display an appropriate message.\niv. Find Minimum and Maximum: Implement functions to find and display the minimum and maximum values in the BST.",
        "algorithm": [
          "Start the program.",
          "Define struct Node with int data, left and right child pointers.",
          "Define initializeBST(): Return NULL.",
          "Define insertNode(root, value): If root is NULL allocate newNode with data = value, return newNode; if value < root->data insert into left subtree; else if value > root->data insert into right subtree; return root.",
          "Define findMinimum(root): Traverse to leftmost node; return data.",
          "Define findMaximum(root): Traverse to rightmost node; return data.",
          "Define deleteNode(root, value): If root is NULL return NULL; if value < root->data recurse left; else if value > root->data recurse right; else if found: if no left child return right; if no right child return left; if two children find inorder successor in right subtree, replace data, delete successor from right subtree; return root.",
          "Define displayInorder(root): Traverse left, print root->data, traverse right.",
          "In main(): Initialize root, provide menu (1. Insert, 2. Delete, 3. Find Min, 4. Find Max, 5. Inorder, 6. Exit), handle user choices.",
          "Return 0 and stop."
        ],
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\n// Structure to represent a node in the BST\nstruct Node {\n    int data;\n    struct Node* left;\n    struct Node* right;\n};\n\n// Function to initialize an empty BST\nstruct Node* initializeBST() {\n    return NULL;\n}\n\n// Function to insert a node into the BST\nstruct Node* insertNode(struct Node* root, int value) {\n    if (root == NULL) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = value;\n        newNode->left = newNode->right = NULL;\n        return newNode;\n    }\n    if (value < root->data) {\n        root->left = insertNode(root->left, value);\n    }\n    else if (value > root->data)\n    {\n        root->right = insertNode(root->right, value);\n    }\n    return root;\n}\n\n// Function to find the minimum value in the BST\nint findMinimum(struct Node* root) {\n    if (root == NULL) {\n        printf(\"The BST is empty.\\n\");\n        return -1;\n    }\n    while (root->left != NULL) {\n        root = root->left;\n    }\n    return root->data;\n}\n\n// Function to find the maximum value in the BST\nint findMaximum(struct Node* root) {\n    if (root == NULL) {\n        printf(\"The BST is empty.\\n\");\n        return -1;\n    }\n    while (root->right != NULL) {\n        root = root->right;\n    }\n    return root->data;\n}\n\n// Function to delete a node from the BST\nstruct Node* deleteNode(struct Node* root, int value) {\n    if (root == NULL) {\n        printf(\"Value %d not found in the BST.\\n\", value);\n        return root;\n    }\n    if (value < root->data) {\n        root->left = deleteNode(root->left, value);\n    }\n    else if (value > root->data)\n    {\n        root->right = deleteNode(root->right, value);\n    }\n    else\n    {\n        if (root->left == NULL)\n        {\n            struct Node* temp = root->right;\n            free(root);\n            return temp;\n        }\n        else if (root->right == NULL)\n        {\n            struct Node* temp = root->left;\n            free(root);\n            return temp;\n        }\n        struct Node* temp = root->right;\n        while (temp->left != NULL)\n        {\n            temp = temp->left;\n        }\n        root->data = temp->data;\n        root->right = deleteNode(root->right, temp->data);\n    }\n    return root;\n}\n\n// Function to display the BST in inorder traversal\nvoid displayInorder(struct Node* root) {\n    if (root == NULL) {\n        return;\n    }\n    displayInorder(root->left);\n    printf(\"%d \", root->data);\n    displayInorder(root->right);\n}\n\nint main() {\n    struct Node* root = initializeBST();\n\n    while (1)\n    {\n        printf(\"\\nBinary Search Tree Menu:\\n\");\n        printf(\"1. Insert a node\\n\");\n        printf(\"2. Delete a node\\n\");\n        printf(\"3. Find Minimum\\n\");\n        printf(\"4. Find Maximum\\n\");\n        printf(\"5. Display Inorder Traversal\\n\");\n        printf(\"6. Exit\\n\");\n\n        int choice, value;\n        printf(\"Enter your choice: \");\n        scanf(\"%d\", &choice);\n\n        switch (choice)\n        {\n            case 1:\n                printf(\"Enter value to insert: \");\n                scanf(\"%d\", &value);\n                root = insertNode(root, value);\n                break;\n            case 2:\n                printf(\"Enter value to delete: \");\n                scanf(\"%d\", &value);\n                root = deleteNode(root, value);\n                break;\n            case 3:\n                printf(\"Minimum value: %d\\n\", findMinimum(root));\n                break;\n            case 4:\n                printf(\"Maximum value: %d\\n\", findMaximum(root));\n                break;\n            case 5:\n                printf(\"Inorder Traversal: \");\n                displayInorder(root);\n                printf(\"\\n\");\n                break;\n            case 6:\n                exit(0);\n            default:\n                printf(\"Invalid choice. Try again.\\n\");\n                break;\n        }\n    }\n\n    return 0;\n}"
      }
    ]
  }
];

// Helper: escape HTML
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper: format question text preserving paragraphs and samples
function formatQuestionText(text) {
  if (text.includes("Sample Input:")) {
    const parts = text.split("Sample Input:");
    const mainPart = escapeHTML(parts[0].trim()).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");
    const samplePart = escapeHTML(parts[1].trim());
    return `<p>${mainPart}</p><div class="sample-input-box">Sample Input:\n${samplePart}</div>`;
  }
  return `<p>${escapeHTML(text).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")}</p>`;
}

// Helper: format numbered algorithm
function formatAlgorithm(steps) {
  let html = `<ol class="aesthetic-ol">`;
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (Array.isArray(step)) {
      html += `<ul>`;
      for (const substep of step) {
        html += `<li>${escapeHTML(substep)}</li>`;
      }
      html += `</ul>`;
    } else {
      if (i + 1 < steps.length && Array.isArray(steps[i + 1])) {
        html += `<li>${escapeHTML(step)}<ul>`;
        for (const substep of steps[i + 1]) {
          html += `<li>${escapeHTML(substep)}</li>`;
        }
        html += `</ul></li>`;
        i++;
      } else {
        html += `<li>${escapeHTML(step)}</li>`;
      }
    }
  }
  html += `</ol>`;
  return html;
}

// Switch View: Show Option Selector Screen
function showSelectorView() {
  document.getElementById("view-selector").style.display = "block";
  document.getElementById("view-detail").style.display = "none";
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update quick pills
  document.querySelectorAll(".quick-pill").forEach(p => p.classList.remove("active"));
}

// Switch View: Show Specific Question Answer
function showDetailView(expId) {
  const exp = experimentsData.find(e => e.id === expId);
  if (!exp) return;

  const container = document.getElementById("detail-content");
  
  let html = `
    <div class="detail-header">
      <div class="detail-title-group">
        <h2>${escapeHTML(exp.title)}</h2>
        <p>${escapeHTML(exp.desc)}</p>
      </div>
      <button class="back-btn" onclick="showSelectorView()">
        <span>←</span> Choose Another Question
      </button>
    </div>
  `;

  exp.subquestions.forEach((subq) => {
    html += `
      <article class="answer-card">
        <header class="answer-header">
          <div class="answer-header-title">
            <span class="badge-subquestion">${escapeHTML(subq.number)}</span>
            <h3>${escapeHTML(subq.subtitle || subq.title)}</h3>
          </div>
        </header>

        <div class="answer-body">
          <!-- 1. QUESTION / PROBLEM STATEMENT -->
          <div class="content-section">
            <h4 class="section-tag">1. QUESTION / PROBLEM STATEMENT</h4>
            <div class="question-box">
              ${formatQuestionText(subq.question)}
            </div>
          </div>

          <!-- 2. ALGORITHM -->
          <div class="content-section">
            <h4 class="section-tag">2. ALGORITHM</h4>
            <div class="algorithm-box">
              ${formatAlgorithm(subq.algorithm)}
            </div>
          </div>

          <!-- 3. PROGRAM / CODE -->
          <div class="content-section">
            <h4 class="section-tag">3. PROGRAM / CODE</h4>
            <div class="code-window">
              <div class="window-bar">
                <div class="window-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <span class="window-title">${escapeHTML(exp.shortName.toLowerCase().replace(/\s+/g, '_'))}_${subq.number.replace(/[^a-z0-9]/gi, '')}.c</span>
              </div>
              <pre><code class="language-c">${escapeHTML(subq.code)}</code></pre>
            </div>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;

  document.getElementById("view-selector").style.display = "none";
  document.getElementById("view-detail").style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update quick pills
  document.querySelectorAll(".quick-pill").forEach(p => {
    if (p.dataset.id === expId) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
}

// Build Options Grid (1 to 9) and Quick Pills
function buildApp() {
  const gridContainer = document.getElementById("options-grid");
  const quickPillsContainer = document.getElementById("quick-nav-pills");

  gridContainer.innerHTML = "";
  quickPillsContainer.innerHTML = "";

  experimentsData.forEach(exp => {
    // 1. Create Option Card in Grid
    const card = document.createElement("div");
    card.className = "option-card";
    card.onclick = () => showDetailView(exp.id);

    const tagsHtml = exp.subquestions
      .map(sq => `<span class="sub-tag">${escapeHTML(sq.number)}</span>`)
      .join("");

    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="card-num-badge">0${exp.num}</span>
          <span class="card-arrow">→</span>
        </div>
        <h3 class="card-title">${escapeHTML(exp.shortName)}</h3>
        <p class="card-desc">${escapeHTML(exp.desc)}</p>
      </div>
      <div class="card-footer-tags">
        ${tagsHtml}
      </div>
    `;
    gridContainer.appendChild(card);

    // 2. Create Quick Pill in Header
    const pill = document.createElement("button");
    pill.className = "quick-pill";
    pill.dataset.id = exp.id;
    pill.textContent = exp.num;
    pill.title = exp.title;
    pill.onclick = () => showDetailView(exp.id);
    quickPillsContainer.appendChild(pill);
  });
}

document.addEventListener("DOMContentLoaded", buildApp);
