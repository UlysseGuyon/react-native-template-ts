# How to install

```bash
npx react-native init <Project_Name> --template https://github.com/UlysseGuyon/react-native-template-ts
```

After the installation of android and ios directories, change the following files :
- in build.gradle
```
...
  buildToolsVersion = "28.0.3"
  minSdkVersion = 16
  compileSdkVersion = 28
  targetSdkVersion = 28
  supportLibVersion = "28.0.0"
...
```
- in gradle/wrapper/gradle-wraper.properties
```
...
  distributionUrl=https\://services.gradle.org/distributions/gradle-5.6.4-all.zip
...
```
