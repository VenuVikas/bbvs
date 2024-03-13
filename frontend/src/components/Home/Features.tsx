import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
              Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
            A BLOCKCHAIN VOTING SYSTEM OFFERS DECENTRALIZED AND TAMPER-RESISTANT VOTING, ENSURING TRANSPARENCY, SECURITY, AND IMMUTABILITY OF ELECTION RECORDS THROUGH DISTRIBUTED LEDGER TECHNOLOGY.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            Traditional security measures often rely on central authorities or servers, which are vulnerable to single points of failure and attacks. Blockchain operates on a decentralized network of nodes, where data is distributed across multiple locations. This decentralization makes it inherently more resistant to hacking attempts and ensures that there is no single point of control that can be compromised.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
            Blockchain maintains a tamper-proof ledger of transactions. Once data is recorded on the blockchain, it cannot be altered or deleted without consensus from the majority of the network participants. This immutability ensures data integrity and protects against unauthorized changes or manipulation of records.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
