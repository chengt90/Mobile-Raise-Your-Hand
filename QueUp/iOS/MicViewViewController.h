//
//  MicViewViewController.h
//  QueUp
//
//  Created by Cheng Tian on 5/31/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Sinch/Sinch.h>


@interface MicViewViewController : UIViewController <SINCallClientDelegate>

@property (weak, nonatomic) IBOutlet UIButton *callButton;
- (IBAction)call:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *BackToReact;
- (IBAction)back:(id)sender;


@end
