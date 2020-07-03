import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className= 'subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className=
          'subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>

        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route path='/about' render={() =>  (
              <div>
                <h1>About the University</h1>
                <p>
                  Red ensign knave carouser scuppers heave to snow clipper fluke Davy Jones' Locker chantey squiffy ye jib no prey, no pay transom. Lateen sail aye jolly boat crack Jennys tea cup schooner Buccaneer bilged on her anchor bilge water parrel reef chandler handsomely cutlass boatswain piracy. Avast coffer mutiny doubloon nipperkin piracy weigh anchor rutters crow's nest chase guns pirate smartly wench haul wind to go on account. Sutler sloop chase guns snow Privateer hardtack mizzenmast scurvy Arr provost grog schooner fore landlubber or just lubber Plate Fleet.

                  Davy Jones' Locker booty poop deck port long clothes sloop strike colors Jack Tar grog blossom chandler pressgang execution dock pirate holystone come about. Matey cutlass line gangplank black jack lanyard aft Arr pillage run a shot across the bow carouser scuttle weigh anchor boatswain nipperkin. Lad wherry lass quarter weigh anchor measured fer yer chains Davy Jones' Locker maroon Gold Road poop deck Sea Legs hardtack Jack Ketch scuppers square-rigged. Driver no prey, no pay grog blossom ye hornswaggle Spanish Main Brethren of the Coast barkadeer draught handsomely lugger yo-ho-ho crimp plunder swing the lead.
              </p>
              </div>
            )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}