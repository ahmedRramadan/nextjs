import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import './globals.css';
import "animate.css/animate.min.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
