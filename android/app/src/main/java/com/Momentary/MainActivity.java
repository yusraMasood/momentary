package com.Momentary;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.blitzapp.animatedsplash.animation.GroupAnimation;
import static com.blitzapp.animatedsplash.animation.AnimatedText.FIT_CENTER;
import static com.blitzapp.animatedsplash.animation.AnimatedText.FIT_XY;
import static com.blitzapp.animatedsplash.animation.Constants.FADE;
import static com.blitzapp.animatedsplash.animation.Constants.SCALE;
import static com.blitzapp.animatedsplash.animation.Constants.SLIDE;
import static com.blitzapp.animatedsplash.animation.Constants.SPLASH_SLIDE_RIGHT;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import com.blitzapp.animatedsplash.animation.AnimatedObject;
import com.blitzapp.animatedsplash.animation.GroupAnimation;
import com.blitzapp.animatedsplash.animation.ObjectAnimation;
import com.blitzapp.animatedsplash.animation.SingleAnimation;
import com.blitzapp.animatedsplash.animation.Splash;
import android.os.Bundle;
import android.util.Log;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.RotateAnimation;
import android.widget.ImageView;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    try {
      initiateSplash();
    } catch (Exception e) {
      Log.e("ANIMATED_SPLASH", e.getMessage());
    }
  }
  public void initiateSplash() throws Exception {
    // Create Splash
    Splash splash = new Splash(MainActivity.this);
    //Set Background Color To View
    splash.setBackgroundColor("#101010");
    //Set Hiding Animation for Splash
    splash.setSplashHideAnimation(SPLASH_SLIDE_RIGHT);
    //Set Delay for Splash to hide
    splash.setSplashHideDelay(1500);

    //Creating Image and adding its properties and animation

    AnimatedObject logoimage = new AnimatedObject(R.drawable.momentary, screenHeight * 0.12, screenWidth * 0.75);
    logoimage.setPositionY(screenHeight*0.155F);
    logoimage.setScaleType(FIT_XY);
    logoimage.setVisibility(false);
    splash.addAnimatedImage(logoimage);


    AnimatedObject loadingImage = new AnimatedObject(R.drawable.loading, screenHeight * 0.11, screenHeight * 0.11);
    loadingImage.setPositionY(screenHeight*0.8F);
////    loadingImage.setRotateDegree(180);
    loadingImage.setScaleType(FIT_XY);
//    loadingImage.setVisibility(false);
    splash.addAnimatedImage(loadingImage);


    ObjectAnimation logoimageAnimation1 = new ObjectAnimation(logoimage, FADE, 1000, 0f, 1f, false);
    ObjectAnimation logoimageAnimation2 = new ObjectAnimation(logoimage, SCALE, 1000, 0f, 1f, 0f, 1f, false);
    ObjectAnimation loadingAnimation = new ObjectAnimation(loadingImage, FADE, 2000, 0,180, true);
//    ObjectAnimation *squareAnimation1 = [[ObjectAnimation alloc] initimage:loadingImage imageSource:loadingImage animationtype:FADE animationDuration:2000 rotateDegree:180 loop:true];
//initimage:loadingImage
//    ObjectAnimation loadingAnimation = new ObjectAnimation(loadingImage, SCALE, 2000, 0f, 1f, 0f, 1f, true);

//    ObjectAnimation loadingAnimation = new ObjectAnimation(loadingImage, FADE, 2000, 0f, 1f,  true);


    GroupAnimation logogroup = new GroupAnimation(1);
    GroupAnimation loadingGroup = new GroupAnimation(1);
//    RotateAnimation rotate = new RotateAnimation(0, 180, Animation.RELATIVE_TO_SELF, 0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
//    rotate.setDuration(5000);
//    ImageView image= (ImageView) findViewById(R.drawable.loading);
//
//    rotate.setInterpolator(new LinearInterpolator());
//    loadingImage.startAnimation(rotate);
    loadingGroup.addAnimation(loadingAnimation);

    logogroup.addAnimation(logoimageAnimation1);
    logogroup.addAnimation(logoimageAnimation2);

    splash.ShowSplash();
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Momentary";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
