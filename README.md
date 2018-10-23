# Multimedia im Netz - Winter Semester 2018/2019
_Online Multimedia - Winter Term 2018/2019_


## Required Toolkit

To do the Break-Out exercises during the tutorials and to complete all assignments, make sure to install these tools *as soon as possible*.

- Text Editor / Web IDE *- choose one -*
  - [VS Code](https://code.visualstudio.com/download)
  - [Atom](https://atom.io/)
  - [Sublime](https://www.sublimetext.com/)
  - WebStorm (Students are eligible for a [free version](https://www.jetbrains.com/shop/eform/students))

### Major Subject
- Git. On Windows you need to install git from [https://git-scm.com/](https://git-scm.com/). It's already included on macOS and Linux. On Mac you might want to install the [XCode Command Line Tools](http://railsapps.github.io/xcode-command-line-tools.html) to make sure you get the latest version.
    - After you're all set with git, go straight ahead to [this tutorial](https://rogerdudler.github.io/git-guide/), if you don't know git.
    - Watch [this video](https://www.youtube.com/watch?v=Y9XZQO1n_7c) to get you all up and running with git.
    - We recommend generating an SSH key and cloning this repository via SSH.
    - [This article](https://chris.beams.io/posts/git-commit/) is also a recommended read when working with git.

- NodeJS (+ npm). https://nodejs.org/en/.
    - MacOS: preferably via [Homebrew](https://brew.sh/) (or MacPorts if you already have that).  The package from the NodeJS website also works.
    - Linux: the package in the repos are often a bit outdated, so please look for other ways to get the latest stable version
    - Windows: the version from the NodeJS website should work.
- Once you have npm running (check via `npm -v`), install these packages (you can do all that from the Git-Bash):
  - Express Generator: `npm install -g express-generator`
  - Angular CLI:  `npm install -g @angular/cli`
  - Polymer-CLI: `npm install -g polymer-cli`

- MongoDB. Follow the [installation instructions](https://docs.mongodb.com/manual/installation/).

### Minor Subject
- XAMP stack. We recommend [xampp](https://www.apachefriends.org/de/index.html) (for Windows and Linux) and [MAMP](https://www.mamp.info/) for macOS:
  - Using a bundle is the easiest way, but you can set up all components (Apache, PHP, MySQL) individually on you own peril.
  - Create a file `test.php` and put this in it:
    ```PHP
    <?php echo "Hello World!"; ?>
    ```
    Put the file in the appropriate location that XAMP uses to serve content.
    With xampp and MAMP this is usually `htdocs` in your installation directory.
    You should then see "Hello World!" when you open [http://localhost/](http://localhost/) in your browser.
  - You can install Apache and MySQL as "service" to make sure they run in the background. We discourage doing this unless you have a good firewall.


## Repository Structure

### `/assignments`

Everything related to the assignments goes here.

#### `/skeletons`
Contains code skeletons you can use to solve the tasks - these are optional and you don't have to use them, if you
prefer to create the code from scratch (sometimes this can be easier!).

#### `/solutions`
**Commit your own solutions in the `solutions` sub-directories.** Read the [README](https://github.com/mimuc/mmn-ws1819/tree/master/assignments/solutions) first to find out how to do this. There won't be official solutions from our side.

### `/tutorials`
all example code of the tutorials, break out material and other documents are here.

### `/minor-subject-nebenfach`
all **minor subject** example code of the tutorials, break out material and other documents are here.
