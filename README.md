# Swiggy_assign

## Introduction

Arena Battle Game is a simple Node.js application where players can be added to an arena, and they can battle each other based on their health, strength, and attack values. The game uses a dice roll to determine the outcome of attacks during battles.

## Features

- Add new players with specific attributes.
- Display all players in the arena.
- Conduct battles between players.
- Remove players from the arena upon defeat.
- Interactive user input for game management.

## Installation

To get started with the Arena Battle Game, follow these steps:

### Clone the repository:

```
git clone https://github.com/wittysam8382/magic-arena-game.git
```

### Navigate to the project directory
```
cd magic-arena-game
```
### Install the dependencies:
```
npm install
```
### Usage
```
node index.js
```
### Example
```
Welcome to the arena!!!

Options:
    1> Add new player
    2> Battle
    3> End game

Enter your choice (integer): 1
Enter the player's name: a
Enter a's health: 155
Enter a's attack: 10
Enter a's strength: 52

____________________________________________________________________________________________________

|       Id      |       Name    |       Health  |       Strength        |       Attack  |
|       0       |       a       |       155     |       52      |       10      |

Options:
    1> Add new player
    2> Battle
    3> End game

Enter your choice (integer): 2
There should be at least two players in the Arena.
Please add more players.

____________________________________________________________________________________________________

|       Id      |       Name    |       Health  |       Strength        |       Attack  |
|       0       |       a       |       155     |       52      |       10      |

Options:
    1> Add new player
    2> Battle
    3> End game

Enter your choice (integer): 1
Enter the player's name: b
Enter b's health: 544
Enter b's attack: 23
Enter b's strength: 50

____________________________________________________________________________________________________

|       Id      |       Name    |       Health  |       Strength        |       Attack  |
|       0       |       a       |       155     |       52      |       10      |
|       1       |       b       |       544     |       50      |       23      |

Options:
    1> Add new player
    2> Battle
    3> End game

Enter your choice (integer): 2
Enter the first player's id: 0
Enter the second player's id: 1

____________a v/S b____________

a hits b with power = 50
b defends with power = 250
b's health: 544

b hits a with power = 92
a defends with power = 208
a's health: 155

a hits b with power = 10
b defends with power = 50
b's health: 544

b hits a with power = 23
a defends with power = 104
a's health: 155

... (battle continues)

a hits b with power = 30
b defends with power = 150
b's health: 534

b hits a with power = 46
a defends with power = 260
a's health: 53

a hits b with power = 30
b defends with power = 50
b's health: 524

b hits a with power = 46
a defends with power = 208
a's health: 53

a hits b with power = 10
b defends with power = 200
b's health: 524

b hits a with power = 115
a defends with power = 312
a's health: 53

a hits b with power = 40
b defends with power = 100
b's health: 524

b hits a with power = 115
a defends with power = 156
a's health: 53

a hits b with power = 30
b defends with power = 150
b's health: 524

b hits a with power = 69
a defends with power = 156
a's health: 53

a hits b with power = 50
b defends with power = 50
b's health: 524

b hits a with power = 23
a defends with power = 104
a's health: 53

a hits b with power = 60
b defends with power = 200
b's health: 524

b hits a with power = 23
a defends with power = 156
a's health: 53

a hits b with power = 60
b defends with power = 100
b's health: 524

b hits a with power = 115
a defends with power = 312
a's health: 53

a hits b with power = 30
b defends with power = 150
b's health: 524

b hits a with power = 138
a defends with power = 312
a's health: 53

a hits b with power = 60
b defends with power = 50
b's health: 514

b hits a with power = 69
a defends with power = 208
a's health: 53

a hits b with power = 40
b defends with power = 150
b's health: 514

b hits a with power = 23
a defends with power = 208
a's health: 53

a hits b with power = 10
b defends with power = 300
b's health: 514

b hits a with power = 46
a defends with power = 312
a's health: 53

a hits b with power = 40
b defends with power = 250
b's health: 514

b hits a with power = 23
a defends with power = 208
a's health: 53

a hits b with power = 10
b defends with power = 100
b's health: 514

b hits a with power = 115
a defends with power = 312
a's health: 53

a hits b with power = 20
b defends with power = 250
b's health: 514

b hits a with power = 23
a defends with power = 208
a's health: 53

a hits b with power = 20
b defends with power = 100
b's health: 514

b hits a with power = 115
a defends with power = 52
a's health: 0

b has emerged victorious!!!

a has been un-alived...

____________________________________________________________________________________________________

|       Id      |       Name    |       Health  |       Strength        |       Attack  |
|       1       |       b       |       514     |       50      |       23      |

Options:
    1> Add new player
    2> Battle
    3> End game

Enter your choice (integer): 3
Bye Bye...
```
### Testing

This project uses Jest for testing. To run the tests, use the following command:

```
npm test
```

```Project Structure

├── index.js
├── modules
│   ├── arena.js
│   └── player.js
├── util
│   └── common.js
├── test
│   ├── arena.test.js
│   ├── player.test.js
│   └── util.common.test.js
├── package.json
└── README.md
```


