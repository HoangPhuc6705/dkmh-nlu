import WillPaid from './WillPail';
import Paid from './Paid';
import ButtonGreen from '../../components/Button';
import { MdReceipt } from 'react-icons/md';

/**
 * trang thanh toán học phí, liệt kê danh sách những học kì đã đóng và chưa đóng, chức đăng đóng học phí bằng cách quét mã qr, nhập stk hoặc ra các ngân hàng gần nhất.
 * xuất ra thông tin 
 * đóng học phí
 * học phí còn nợ
 * @returns react.fc
 */
const Tuitition: React.FC<{}> = () => {


  return <div className='flex flex-col gap-3'>
    <WillPaid />
    <Paid />
    <div className='flex flex-3'>
      <ButtonGreen text='Hoá đơn' icon={<MdReceipt />} />
    </div>
  </div>
};

export default Tuitition;
