import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Link from "next/link";

// 1. Khai báo danh sách sản phẩm ở một nơi duy nhất để dễ quản lý
const products = [
  { id: 1, name: "Máy lạnh Panasonic Inverter 2 HP CU/CS-XU18UKH-8", price: "12.000.000", image: "/maylanh.jpg", remain: "còn 3/10 sản phẩm" },
  { id: 2, name: "máy nước nóng kangaroo", price: "5.000.000", image: "/mayuongnuoc.jpg", remain: "còn 7/10 sản phẩm" },
  { id: 3, name: "keupchenthongminh", price: "900.000", image: "/keupchenthongminh.webp", remain: "còn 9/10 sản phẩm" },
  { id: 4, name: "noichienkhongdau", price: "1.000.000", image: "/noichienkhongdau.webp", remain: "còn 4/10 sản phẩm" },
  { id: 5, name: "mayhuybuithongminh", price: "2.000.000", image: "/mayhuybuithongminh.webp", remain: "còn 1/10 sản phẩm" },
  { id: 6, name: "Bộ Nhả Kem Đánh Răng Tự Động", price: "1.500.000", image: "/bonhakemtudong.webp", remain: "còn 10/10 sản phẩm" }
];

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        {/* 2. Sử dụng map() để duyệt qua danh sách sản phẩm */}
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
                <Link href={`/chitietsanpham/${product.id}`}>
            <div className={styles.image}>
              <Image 
                src={product.image} 
                alt={product.name} 
                width={200} 
                height={150} 
                style={{ objectFit: "cover" }} // Đảm bảo ảnh không bị méo
              />
            </div>
          </Link>
            <div className={styles.name}>{product.name}</div>
            
            <div className={styles.price}>{product.price} VNĐ</div>
            
            <div className={styles.remain}>{product.remain}</div>

            <div className={styles.actions}>
              <button className={styles.buy}>Buy</button>
              
              {/* Link dẫn đến trang chi tiết động */}
              <Link href={`/chitietsanpham/${product.id}`}>
                <button className={styles.viewDetail}>Xem chi tiết</button>
              </Link>
            </div>

          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
