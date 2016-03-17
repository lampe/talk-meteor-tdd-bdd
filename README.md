# setup
### running meteor and gagarin
you have to download the latest ChromeDriver https://sites.google.com/a/chromium.org/chromedriver/
```bash
# install gagarin
$ sudo npm -g i gagarin
# start Meteor
$ meteor
# in a second tab/terminal
$ cd <path to your ChromeDriver>
#run chromeDriver
$ ./chromedriver
#in a third tab/terminal run this command in the meteor project folder
$ gagarin -B -m -c
```

## Step1

- write a test for a array with accepted moves and a object with winning Moves.
- write so much code that the test are passed
