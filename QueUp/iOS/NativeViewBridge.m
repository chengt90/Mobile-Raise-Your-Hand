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

- (void)goToNative{
  RCT_EXPORT();
  AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  
  // [[[UIApplication sharedApplication] delegate] goNativeStoryboard];
  
  //[appDelegate yourMethod];
  
  [appDelegate goNativeStoryboard];
  //    [[NSNotificationCenter defaultCenter] removeObserver:self];
}


- (void)addEmail:(NSString *)currentUserEmail {
  RCT_EXPORT();
  NSLog(@"*************SAVING EMIAL **********>>>>");
//  NSArray *parameters = @[playerID];
//  [self.meteorClient callMethodName:@"updateScore" parameters:parameters responseCallback:^(NSDictionary *response, NSError *error) {
//    // NSString *message = error[@"error"];
//    NSLog(@"Error: %@", error);
//  }];
  userEmail = currentUserEmail;
  NSLog(@"***********************>>>>");

  NSLog(@"***********************>>>>");
  NSLog(@"***********************>>>>");

  NSLog(@"%@", userEmail);


  
}



NSString *myGlobalString = @"foo";


@end
