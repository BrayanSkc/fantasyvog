import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import Input from "../input";
import Switch from "react-switch";
import classNames from "classnames";

export interface BalanceProps {
onClick:Function;

}

const Balance: React.SFC<BalanceProps> = ({onClick}) => {
  const [isAccounts, setIsAccounts] = useState(true);
  const [checkedLimits, setCheckedLimits] = useState(true);
  const [checkedLoss, setCheckedLoss] = useState(true);

  const limitsChange = () => {
    try {
      setIsAccounts(false);
      onClick();
    } catch (err) {
      console.log("error Limits");
    }
  };

  return (
    <>
      <div className="profile-settings-header-button">
        <Button
          className={classNames({
            "btn-header-balance-primary": !!isAccounts,
            "btn-header-balance-secondary": !isAccounts
          })}
          onClick={() => setIsAccounts(true)}
        >
          Accounts
        </Button>
        <div className="object-margin"></div>
        <Button
          className={classNames({
            "btn-header-balance-primary": !isAccounts,
            "btn-header-balance-secondary": !!isAccounts
          })}
          onClick={limitsChange}
        >
          Limits
        </Button>
      </div>
      {isAccounts ? (
        <>
          <div className="profile-header-balance">
            <div className="profile-left-header-balance">
              <span className="profile-title-balance">Your Balance</span>
              <span className="profile-quantity-balance">₦ 416,260.00</span>
            </div>
            <div className="profile-right-header-balance">
              <Button className={"btn-left-balance-primary"}>Withdrawal</Button>
              <Button className={"btn-right-balance-primary"}>
                Deposit funds
              </Button>
            </div>
          </div>
          <div className="profile-body-balance">
            <div className="profile-header-transaction">
              <span style={{ font: " Bold 16px/21px Roboto" }}>
                Transaction History
              </span>
              <Input
                name="balance-search"
                classes={{
                  input: "balance-input-transaction-custom",
                  container: "balance-input-transaction"
                }}
                placeholder=" Search content"
                type="text"
                endIcon={<i className="ifont icon-search"></i>}
                value=""
                onChange={() => {}}
              />
            </div>
            <table className="table-profile-transaction">
              <tr>
                <th className="title-table-primary">Type</th>
                <th className="title-table-primary-two">Date</th>
                <th className="title-table-secondary">Value</th>
              </tr>
              <tr className="row-primary-body-table">
                <td className="row-primary-table">Payouts</td>
                <td className="column-table-bold">JAN 01 2019</td>
                <td className="row-primary-table">₦ 800</td>
              </tr>
              <tr className="row-primary-body-table">
                <td className="row-secondary-table">Withdraw</td>
                <td className="column-table-bold">JAN 01 2019</td>
                <td className="row-secondary-table">- ₦ 100</td>
              </tr>
              <tr className="row-primary-body-table">
                <td className="row-primary-table">Fund Deposit</td>
                <td className="column-table-bold">JAN 01 2019</td>
                <td className="row-primary-table">₦ 1.000</td>
              </tr>
              <tr className="row-primary-body-table">
                <td className="row-tertiary-table">Entry Payment</td>
                <td className="column-table-bold">JAN 01 2019</td>
                <td className="row-tertiary-table">- ₦ 100</td>
              </tr>
            </table>
          </div>
        </>
      ) : (
        <div className="container-balance-limits">
          <div className="header-balance-limits">
            <span className="title-balance-limits">Spending Limits</span>
            <Switch
              checked={checkedLimits}
              onChange={() => setCheckedLimits(!checkedLimits)}
              onColor="#ffc8b8"
              onHandleColor="#ff6600"
              uncheckedIcon={false}
              checkedIcon={false}
              handleDiameter={20}
              height={10}
              width={30}
            />
          </div>
          <div className="body-balance-limits">
            <span className="text-balance-limits">
              Set a limit for the maximum amount of money that you can use in
              Contests either Weekly or Monthly.
            </span>
            <Input
              label="Weekly Limit"
              onChange={() => {}}
              name="spending"
              classes={{
                input: "limits-input-limits",
                container: "limits-container-limits"
              }}
            />
            <Input
              label="Monthly Limit"
              onChange={() => {}}
              name="loss"
              classes={{
                input: "limits-input-limits",
                container: "limits-container-limits"
              }}
            />
          </div>
          <div className="header-balance-limits">
            <span className="title-balance-limits">Loss Limits</span>
            <Switch
              checked={checkedLoss}
              onChange={() => setCheckedLoss(!checkedLoss)}
              onColor="#ffc8b8"
              onHandleColor="#ff6600"
              uncheckedIcon={false}
              checkedIcon={false}
              handleDiameter={20}
              height={10}
              width={30}
            />
          </div>
          <div className="body-balance-limits">
            <span className="text-balance-limits">
              Set a limit for the maximum amount of money that you can use in
              Contests either Weekly or Monthly.
            </span>
            <Input
              label="Weekly Limit"
              onChange={() => {}}
              name="spending"
              value="spending"
              classes={{
                input: "limits-input-limits",
                container: "limits-container-limits"
              }}
            />
            <Input
              label="Monthly Limit"
              onChange={() => {}}
              name="loss"
              classes={{
                input: "limits-input-limits",
                container: "limits-container-limits"
              }}
            />
          </div>
          <div className="btn-footer-profile-options">
            <Button className="btn-avatar-primary" id="cancel-changes">
              Cancel
            </Button>
            <Button className="btn-avatar-secondary" id="save-changes">
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Balance;
