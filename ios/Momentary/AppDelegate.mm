#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Momentary";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  bool didFinish = [super application:application didFinishLaunchingWithOptions:launchOptions];
  static Splash *splash = [[Splash alloc] init];
      
      [splash createSplashView:self.window];
      [splash setBackgroundColor:@"000000"];
      [splash setSplashHideAnimation:SPLASH_SLIDE_LEFT];
      [splash setSplashHideDelay:1500];
      
      AnimatedObject *logoImage = [[AnimatedObject alloc] initImage:@"logo" width:screenWidth*0.15 height:screenHeight * 0.14];
      [logoImage setVisibility:(bool) false];
      [logoImage setScaleType:(int) FIT_CENTER];
      [logoImage setPositionY: screenHeight*0.17];
      
      [logoImage addToSplash];
  AnimatedObject *loadingImage = [[AnimatedObject alloc] initImage:@"loading" width:screenWidth*0.13 height:screenHeight * 0.13];
  [loadingImage setVisibility:(bool) false];
  [loadingImage setScaleType:(int) FIT_CENTER];
  [loadingImage setPositionY: screenHeight*0.8];
  
  [loadingImage addToSplash];
      
      ObjectAnimation *logoAnimation = [[ObjectAnimation alloc] initimage:logoImage animationtype:SCALE animationDuration:800 scaleX:5.5 scaleY:4];
//  ObjectAnimation *loadingAnimation = [[ObjectAnimation alloc] initimage:loadingImage animationtype:SLIDE animationDuration:2000 fromX:0 toX:screenWidth-screenWidth*0.5 fromY:0 toY:0 loop:true];
  ObjectAnimation *loadingAnimation = [[ObjectAnimation alloc] initimage:loadingImage animationtype:ROTATE animationDuration:2000 rotateDegree:360 loop:false];
  ObjectAnimation *loadingAnimation2 = [[ObjectAnimation alloc] initimage:loadingImage animationtype:ROTATE animationDuration:2000 rotateDegree:360 loop:false];
  ObjectAnimation *loadingAnimation3 = [[ObjectAnimation alloc] initimage:loadingImage animationtype:ROTATE animationDuration:2000 rotateDegree:360 loop:false];
  ObjectAnimation *loadingAnimation4 = [[ObjectAnimation alloc] initimage:loadingImage animationtype:ROTATE animationDuration:2000 rotateDegree:360 loop:false];
//  ObjectAnimation *loadingAnimation = [[ObjectAnimation alloc] initimage:loadingImage animationtype:SCALE animationDuration:800 scaleX:5.5 scaleY:4];
      SingleAnimation *s1 = [[SingleAnimation alloc] init:logoAnimation priority:2];
//  SingleAnimation *s2 = [[SingleAnimation alloc] init:loadingAnimation priority:2];
  GroupAnimation *groupAnimation1 = [[GroupAnimation alloc] init:1 ];
    [groupAnimation1 addAnimation:loadingAnimation ];
    [groupAnimation1 addAnimation:loadingAnimation2];
  [groupAnimation1 addAnimation:loadingAnimation3];
  [groupAnimation1 addAnimation:loadingAnimation4];
  
  

      [splash splashShow];
  
  return didFinish;
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

@end
