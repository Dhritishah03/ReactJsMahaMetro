import React, { useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BytesizePortfolioIcon } from './BytesizePortfolioIcon.js';
import classes from './CamShow.module.css';
import { CarbonMachineLearningModelIcon } from './CarbonMachineLearningModelIcon.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse40Icon } from './Ellipse40Icon.js';
import { Ellipse435Icon } from './Ellipse435Icon.js';
import { Ellipse437Icon } from './Ellipse437Icon.js';
import { Frame1274Icon } from './Frame1274Icon.js';
import { GrommetIconsTransactionIcon } from './GrommetIconsTransactionIcon.js';
import { Group1212Icon } from './Group1212Icon.js';
import { IconParkOutlineStockMarketIcon } from './IconParkOutlineStockMarketIcon.js';
import { MaterialSymbolsDashboardOutlin } from './MaterialSymbolsDashboardOutlin.js';
import { MaterialSymbolsWalletSharpIcon } from './MaterialSymbolsWalletSharpIcon.js';
import { MdiBankTransferIcon } from './MdiBankTransferIcon.js';
import { SearchNormalIcon } from './SearchNormalIcon.js';

interface Props {
  className?: string;
}

const VideoStream: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [count, setCount] = useState<number | null>(null);
  const [currentFrame, setCurrentFrame] = useState<string | null>(null);

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:8000/ws/video_feed');

    webSocket.onmessage = async (event) => {
      const frameData = JSON.parse(event.data);
      setCurrentFrame(frameData.chunk);
      setCount(frameData.count);
    };

    webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      webSocket.close();
    };
  }, []);

  return (
    <div>
      <h2>Live Image Stream</h2>
      {count !== null && <p>Count: {count}</p>}
      {currentFrame && <img src={`data:image/jpeg;base64,${currentFrame}`} ref={imageRef} alt="Frame" />}
    </div>
  );
};

/* @figmaId 2002:47 */
export const CamShow: FC<Props> = memo(function CamShow(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle982}></div>
      <div className={classes.frame1264}>
        <div className={classes.puneJunctionPNQ}>Pune Junction - PNQ</div>
        <div className={classes.frame1263}>
          <div className={classes.group1222}>
            <div className={classes.rectangle704}></div>
            <div className={classes.searchForPlatformTrainsOrMore}>Search for platform, trains or more</div>
            <div className={classes.searchNormal}>
              <SearchNormalIcon className={classes.icon} />
            </div>
          </div>
          <div className={classes.ellipse40}>
            <Ellipse40Icon className={classes.icon2} />
          </div>
        </div>
      </div>
      <VideoStream/>
      <div className={classes.frame1276}></div>
      <div className={classes.line35}></div>
      <div className={classes.line37}></div>
      <div className={classes.frame654}>
        <div className={classes.frame1271}>
          <div className={classes.frame1266}>
            <div className={classes.userPanel}>User Panel</div>
            <div className={classes.frame1272}>
              <div className={classes.frame1267}>
                <div className={classes.materialSymbolsDashboardOutlin}>
                  <MaterialSymbolsDashboardOutlin className={classes.icon3} />
                </div>
                <div className={classes.liveFeed}>Live Feed</div>
              </div>
            </div>
            <div className={classes.frame1268}>
              <div className={classes.bytesizePortfolio}>
                <BytesizePortfolioIcon className={classes.icon4} />
              </div>
              <div className={classes.crowdAI}>Crowd AI</div>
            </div>
            <div className={classes.frame50}>
              <div className={classes.iconParkOutlineStockMarket}>
                <IconParkOutlineStockMarketIcon className={classes.icon5} />
              </div>
              <div className={classes.stationAnalysis}>Fall Analysis</div>
            </div>
            <div className={classes.frame51}>
              <div className={classes.materialSymbolsWalletSharp}>
                <MaterialSymbolsWalletSharpIcon className={classes.icon6} />
              </div>
              <div className={classes.recordings}>Line Crossing</div>
            </div>
            <div className={classes.frame52}>
              <div className={classes.mdiBankTransfer}>
                <MdiBankTransferIcon className={classes.icon7} />
              </div>
              <div className={classes.crimeDetection}>Crime Detection</div>
            </div>
            <div className={classes.frame1224}>
              <div className={classes.grommetIconsTransaction}>
                <GrommetIconsTransactionIcon className={classes.icon8} />
              </div>
              <div className={classes.reportingTransaction}>Reporting &amp; Transaction</div>
            </div>
            <div className={classes.frame1225}>
              <div className={classes.carbonMachineLearningModel}>
                <CarbonMachineLearningModelIcon className={classes.icon9} />
              </div>
              <div className={classes.alertsNotifications}>Alerts &amp; Notifications</div>
            </div>
          </div>
        </div>
        <div className={classes.frame1273}>
          <div className={classes.frame1274}>
            <Frame1274Icon className={classes.icon10} />
          </div>
          <div className={classes.logout}>Logout</div>
        </div>
        <div className={classes.ellipse437}>
          <Ellipse437Icon className={classes.icon11} />
        </div>
      </div>
      <div className={classes.kavach}>Kavach</div>
      <div className={classes.asset2331}></div>
      <div className={classes.kHsuHRuG3Qq4x3cUnsplash1}></div>
      <div className={classes.cAM6}>CAM 6</div>
      <div className={classes._13345}>13:34:05</div>
      <div className={classes.commonWaitingArea}>Common Waiting Area</div>
      <div className={classes.frame1277}>
        <div className={classes.frame1248}>
          <div className={classes.quickActions}>Quick Actions</div>
        </div>
        <div className={classes.frame12482}>
          <div className={classes.callPolice100}>Call Police 100</div>
        </div>
        <div className={classes.frame12483}></div>
        <div className={classes.sendSecurity}>Send Security</div>
        <div className={classes.frame12484}>
          <div className={classes.callAmbulance102}>Call Ambulance 102</div>
        </div>
        <div className={classes.frame12485}>
          <div className={classes.callFireDept101}>Call Fire Dept 101</div>
        </div>
      </div>
      <div className={classes.frame1278}>
        <div className={classes.frame12486}>
          <div className={classes.crowdAnalysis}>Crowd Analysis</div>
        </div>
        <div className={classes.frame1237}>
          <div className={classes._10Am}>10 am</div>
          <div className={classes._11Am}>11 am</div>
          <div className={classes._12Pm}>12 pm</div>
        </div>
        <div className={classes.frame1260}>
          <div className={classes.jan3011216AM}>Jan 30, 01:12:16 AM</div>
          <div className={classes._35788}>35,788</div>
        </div>
        <div className={classes.ellipse435}>
          <Ellipse435Icon className={classes.icon12} />
        </div>
      </div>
      <div className={classes.rectangle21}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.rectangle23}></div>
      <div className={classes.live}>Live</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon13} />
      </div>
      <div className={classes.frame1235}>
        <div className={classes._11700}>11,700</div>
        <div className={classes._11650}>11,650</div>
        <div className={classes._11600}>11,600</div>
        <div className={classes._11550}>11,550</div>
      </div>
      <div className={classes.rectangle974}></div>
      <div className={classes.rectangle976}></div>
      <div className={classes.rectangle977}></div>
      <div className={classes.rectangle975}></div>
      <div className={classes.group1212}>
        <Group1212Icon className={classes.icon14} />
      </div>
    </div>
  );
});
