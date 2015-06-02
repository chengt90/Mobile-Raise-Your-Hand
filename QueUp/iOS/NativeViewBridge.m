//
//  NativeViewBridge.m
//  QueUp
//
//  Created by Cheng Tian on 5/31/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//


#import <RCTBridge.h>
#import <RCTConvert.h>
#import "NativeViewBridge.h"

#import "AppDelegate.h"

NSString * userEmail;

@implementation NativeViewBridge

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(goToNative){
  AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  [appDelegate goNativeStoryboard];
}

RCT_EXPORT_METHOD(addEmail:(NSString *)currentUserEmail){
  userEmail = currentUserEmail;
  NSLog(@"%@", userEmail);
}



@end
