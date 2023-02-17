import React from 'react';
import { Badge, Input } from 'reactstrap';

const weekDayas = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const BudetTool = ({ openfooter }) => {
  return (
    <>
      <table className="w-100 bordered-table">
        <thead style={{ background: '#f3f2f7' }}>
          <tr>
            <th width={'200'} className="cursor-pointer">
              <div className="d-flex p-1">
                Total
                <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                  7.72 Hrs,
                  <br /> $100
                </span>
                <Badge color="info" pill style={{padding: '10px', height: '30px', marginLeft: '10px'}}>
                  0%
                </Badge>
              </div>
            </th>
            {weekDayas.map((item) => {
              return (
                <th width="100" height="50" className="border cursor-pointer ">
                  <div className="d-flex justify-content-around p-1">
                    <span>{item}</span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        {openfooter ? (
          <tbody className="pr-1 pl-1">
            <tr>
              <td className="border cursor-pointer p-1">
                <div className="d-flex h-100 w-100">Ammount</div>
              </td>
              <td height="30" width="150" className='border' >
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='border'>
                <div className="d-flex justify-content-between  align-items-center p-1">
                  <span>Projected Labor Hours</span>
                  {/* <div>$0 proj.($0 act.)</div> */}
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='border'>
                <div className="d-flex justify-content-between  align-items-center p-1">
                  <span>Actual Labor Hours</span>
                  {/* <div>$0 proj.($0 act.)</div> */}
                </div>
              </td>
              <td height="30" width="150">
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex h-100 w-100 justify-content-center">
                  <div className="cursor-pointer d-flex justify-content-between align-items-center borderleft font-small-3">
                    <Input
                      type="text"
                      className="p-0"
                      style={{ width: '150px', height: '40px' }}
                      placeholder="7:23%"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex justify-content-between  align-items-center p-1">
                  <span>BOH</span>
                  <div>
                    <Badge>0</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="p-1 d-flex justify-content-between">
                  <span>FOH</span>
                  <div>
                    <Badge>0</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
              <td height="30" width="150" className='border'>
                <div className="d-flex justify-content-between align-items-center p-1 h-100 w-100">
                  <div>
                    <Badge>1</Badge>
                  </div>
                  <span>0 Hrs $0</span>
                </div>
              </td>
            </tr>
          </tbody>
        ) : null}
      </table>
    </>
  );
};

export default BudetTool;
