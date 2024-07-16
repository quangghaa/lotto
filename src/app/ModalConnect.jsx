import { Button, Divider, Modal } from "antd";

export const ModalConnect = ({ open, onConnect, onClose }) => {
  return (
    <Modal
      open={open}
      footer={null}
      onCancel={onClose}
      className="modal-connect"
      closeIcon={
        <span style={{ color: "#fff" }}>
          {/* <i className="fa-regular fa-xmark"></i> */}
          <i className="fa-solid fa-xmark"></i>
        </span>
      }
    >
      <h4 className="font-xl">Personal wallet</h4>
      <div className="divider"></div>
      <p className="font-blur">Your TRX Wallet Address</p>
      <div className="wallet-state">
        <input disabled value="Your wallet is not connected" />
      </div>
      <div className="reward-box">
        <div className="flex between">
          <p>
            Your Current Daily Rewards:
            <br />
            <b>0.00%</b>
          </p>
        </div>

        <div className="flex between">
          <p>
            Hold-Bonus:
            <br />
            <b>0.00%</b>
          </p>
          <p className="text-end">
            Contract Bonus:
            <br />
            <b>0.00%</b>
          </p>
        </div>

        <div className="flex between">
          <p>
            Leader Bonus:
            <br />
            <b>0.00%</b>
          </p>
          <p className="text-end">
            Community Bonus:
            <br />
            <b>0.00%</b>
          </p>
        </div>
      </div>

      <div className="flex between align-center">
        <p>
          Available With Balance:
          <br />
          <b className="font-yellow">0.00</b>
        </p>
        <Button className="connect-link-btn">Connect TronLink</Button>
      </div>

      <div className="wallet-values">
        <div className="reward-box reward-box--gray">
          <p>
            Total Deposited
            <br />
            <b>0.00 TRX</b>
          </p>
        </div>
        <div className="reward-box reward-box--gray">
          <p>
            Number of Deposits
            <br />
            <b>0</b>
          </p>
        </div>
        <div className="reward-box reward-box--gray">
          <p>
            Total Earned
            <br />
            <b>0.00 TRX</b>
          </p>
        </div>
        <div className="reward-box reward-box--gray">
          <p>
            Total Withdrawn
            <br />
            <b>0.00 TRX</b>
          </p>
        </div>
      </div>

      <h4>COPY REFERRAL LINK</h4>
      <div className="wallet-state">
        <input type="text" disabled value="Your wallet is not connected" />
        <span className="copy-icon"><i className="fa-regular fa-copy"></i></span>
      </div>
      <p className="font-blur text-center">You should have active deposit to unlock affiliate bonuses!</p>
      <p className="font-blur text-center">
        Referral Rewards: <b>0.00</b> TRX
      </p>
      <div className="reward-level">
        <p className="reward-level__item">
          <span className="font-sm">LEVEL 01</span>
          <br />
          <b>0</b>
        </p>
        <p className="reward-level__item">
          <span className="font-sm">LEVEL 01</span>
          <br />
          <b>0</b>
        </p>
        <p className="reward-level__item">
          <span className="font-sm">LEVEL 01</span>
          <br />
          <b>0</b>
        </p>
        <p className="reward-level__item">
          <span className="font-sm">LEVEL 01</span>
          <br />
          <b>0</b>
        </p>
        <p className="reward-level__item">
          <span className="font-sm">LEVEL 01</span>
          <br />
          <b>0</b>
        </p>
        <p className="reward-level__item">
          <span className="font-sm">LEVEL 01</span>
          <br />
          <b>0</b>
        </p>
      </div>
    </Modal>
  );
};
