//
//  MicViewViewController.m
//  QueUp
//
//  Created by Cheng Tian on 5/31/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "MicViewViewController.h"
#import "AppDelegate.h"


@interface MicViewViewController ()
{
    id<SINClient> _client;
    id<SINCall> _call;
}
@end


@implementation MicViewViewController
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
    
    NSLog(@"***** in here *****");
  

  
    _call = [_client.callClient callUserWithId:@"<test>"];
    
    
//            _call = [[_client callClient] callPhoneNumber:phoneNumber.text];
  
             _call = [[_client callClient] callUserWithId:@"<test>"];
  
            [callButton setTitle:@"Hangup" forState:UIControlStateNormal];
  
}

- (IBAction)back:(id)sender {
}
@end
