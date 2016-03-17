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

## Step0

- add Restivus
- test for a Restivus Object on the Server and Client
- Create a Restivus Object
