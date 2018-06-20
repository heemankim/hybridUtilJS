/**
  제작자 : Team404 (김희만)
  제작일 : 2018. 06. 20
  최종수정일 : 2018. 06. 20
 */

(function(){

  var APP_TAG = "cordova";

  function WebAppUtil(){

  }

  window.webAppUtil = new WebAppUtil();

  /**
   * 현재 접속자의 디바이스가 안드로이드 디바이스인지 체크
   * @return {boolean}
   */
  WebAppUtil.prototype.isAndroid = function() {
    return /Android/i.test(window.navigator.userAgent);
  };


  /**
   * 현재 접속자의 디바이스가 IOS 디바이스인지 체크
   * @return {boolean}
   */
  WebAppUtil.prototype.isIos = function() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && ! window.MSStream;
  };


  /**
   * 안드로이드 웹뷰의 메이저버전 체크
   * @return integer
   */
  WebAppUtil.prototype.getAndroidWebviewMajorVersion = function() {
    return window.navigator.userAgent.match(/Chrome\/(..)/g)[0].replace(/Chrome\/(..)/g,'$1');
  };

  /**
   * IOS 웹뷰의 메이저버전 체크
   * @return integer
   */
  WebAppUtil.prototype.getIphoneWebviewMajorVersion = function() {
    return window.navigator.userAgent.match(/Safari\/.../)[0].replace(/Safari\/(...)/,'$1');
  };

  /**
   * 현재 접속자가 앱을 통해서 들어왔는지 체크
   *  (선행 작업으로 userAgent 에 app을 구분할 수 있는 태그값 추가 필수)
   * @return {boolean}
   */
  WebAppUtil.isNative = function() {
    return window.navigator.userAgent.indexOf(APP_TAG) > -1;
  };

  /**
   * 현재 접속자의 웹뷰 메이저버전 체크
   * @return {integer}
   */
  WebAppUtil.prototype.getWebviewVersion = function(){

    if(this.isAndroid()){

      return this.getAndroidWebviewMajorVersion();

    }else{

      return this.getIphoneWebviewMajorVersion();

    }
  };

  /**
   * 패키지명을 이용해서 플레이스토어 URL Get!
   * @param appPackageName - 패키지명
   * @return {string} - 스토어 링크
   */
  WebAppUtil.prototype.getGooglePlayStoreUrl = function(appPackageName){
    return "http://market.android.com/details?id=" + appPackageName;
  };

  /**
   * 패키지명을 이용해서 삼성 앱스토어 URL Get!
   * @param appPackageName - 패키지명
   * @return {string} - 스토어 링크
   */
  WebAppUtil.prototype.getSamsungAppStoreUrl = function(appPackageName){
    return "http://apps.samsung.com/mercury/appquery/appId=" + appPackageName;
  };

  /**
   * 안드로이드 5.0 이상 구버전 웹뷰 사용자를 위한 웹뷰 스토어 링크
   *   (버전 파편화를 줄이기 위해 안드로이드 5.0 이상 / 웹뷰 메이저버전이 55미만인 경우 웹뷰 업데이트 권장)
   * @return {string}
   */
  WebAppUtil.prototype.getAndroidWebviewStoreUrl = function() {
    return "http://market.android.com/details?id=com.google.android.webview";
  };



})();
