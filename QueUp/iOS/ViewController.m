//
//  ViewController.m
//  QueUp
//
//  Created by Cheng Tian on 5/31/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "ViewController.h"
#import "AppDelegate.h"



@interface ViewController ()
{
  id<SINClient> _client;
  id<SINCall> _call;
}
@end


@implementation ViewController
@synthesize callButton;

-(void)initSinchClient
{
  _client = [Sinch clientWithApplicationKey:@"ccdeeb0b-5733-4bcb-9f44-4b2a7a70dbfe"
                          applicationSecret:@"7nlXhrVpKkSu71xffH4kAA=="
                            environmentHost:@"sandbox.sinch.com"
                                     userId:@"user3"];
  _client.callClient.delegate = self;
  [_client setSupportCalling:YES];
  [_client start];
  [_client startListeningOnActiveConnection];
  
  
}
- (void)viewDidLoad {
  [super viewDidLoad];
  [self initSinchClient];
  // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}


- (IBAction)call:(id)sender {
  
  NSLog(@"***** trying to call *****");
  
  NSLog(@"***** in hedsdsdre *****");
  
  id<SINCallClient> callClient = [_client callClient];
//  id<SINCall>  / /////call = [callClient callUserWithId:@"<user1>"];
  
//  
//          _call = [[_client callClient] callPhoneNumber:@"13016559705"];
  
//           _call = [[_client callClient] callUserWithId:@"<user1>"];
  //
//          [callButton setTitle:@"Hangup" forState:UIControlStateNormal];
  
}

- (IBAction)back:(id)sender {
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  
  AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  
  [appDelegate goToReactNative];
}



-(void)client:(id<SINCallClient>)client didReceiveIncomingCall:(id<SINCall>)call
{
  
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  NSLog(@"$$$$$$$$$$$$$$$$$$$$$$$$");
  [call answer];
  
  
  
}






@end

