# hybridUtilJS - 하이브리드앱(웹앱) 유틸리티 자바스크립트

하이브리드앱 운용시 운영체제 구분 등 유틸객체

## Example

window.webAppUtil.isAndroid();
window.webAppUtil.isIos();


### 기능들

|  <center>함수</center> |  <center>파라미터</center> |  <center>리턴타입</center> | <center>설명</center> |
|:--------|:--------:|--------:|--------:|
|<center> isAndroid </center> | <center> </center> |<center> boolean </center> | <center> 안드로이드 체크 </center> |
|<center> isIos </center> | <center> </center> |<center> boolean </center> | <center> IOS 체크 </center> |
|<center> getAndroidWebviewMajorVersion </center> | <center> </center> |<center> boolean </center> | <center> 안드로이드 웹뷰 메이저버전 확인 </center> |
|<center> getIphoneWebviewMajorVersion </center> | <center> </center> |<center> boolean </center> | <center> IOS 웹뷰 메이저버전 확인 </center> |
|<center> isNative </center> | <center> </center> |<center> boolean </center> | <center> 앱을 통한 접속인지 확인 </center> |
|<center> getWebviewVersion </center> | <center> </center> |<center> boolean </center> | <center> OS구분없이 웹뷰 메이저버전 가져오기 </center> |
|<center> getGooglePlayStoreUrl </center> | <center> appPackageName(String) </center> |<center> boolean </center> | <center> package명을 이용 스토어 링크 생성 </center> |
|<center> getSamsungAppStoreUrl </center> | <center> appPackageName(String) </center> |<center> boolean </center> | <center> package명을 이용 삼성스토어 링크 생성 </center> |
|<center> getAndroidWebviewStoreUrl </center> | <center> </center> |<center> boolean </center> | <center> 안드로이드 웹뷰 스토어 링크(업데이트용) </center> |
