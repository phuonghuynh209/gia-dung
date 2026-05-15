"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ THÊM
import styles from "./page.module.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const products = [
  { 
    id: 1, 
    name: "Máy lạnh Panasonic Inverter 2 HP CU/CS-XU18UKH-8", 
    price: "12.000.000", 
    images: ["/maylanh.jpg", "/maylanh2.webp",], 
    remain: "còn 3/10 sản phẩm", 
    desc: "Máy lạnh inverter tiết kiệm điện, làm lạnh nhanh. Công nghệ mới giúp duy trì nhiệt độ ổn định và vận hành cực kỳ êm ái cho giấc ngủ ngon.",
    brand: "Panasonic",
    warranty: "24 tháng",
    features: ["Công nghệ Inverter tiết kiệm điện", "Lọc sạch không khí với Nanoe-G", "Làm lạnh siêu tốc iAUTO-X"]
  },
  { 
    id: 2, 
    name: "Máy nước nóng Kangaroo", 
    price: "5.000.000", 
    images: ["/mayuongnuoc.jpg", "/mayuongnuoc2.jpg"], 
    remain: "còn 7/10 sản phẩm", 
    desc: "Làm nóng nhanh, hệ thống an toàn đa cấp giúp bạn yên tâm sử dụng hàng ngày.",
    brand: "Kangaroo",
    warranty: "12 tháng",
    features: ["Bơm trợ lực siêu êm", "Cầu dao chống giật ELCB", "Vỏ chống thấm nước IP25"]
  },
  { 
    id: 3, 
    name: "Kệ úp chén thông minh", 
    price: "900.000", 
    images: ["/keupchenthongminh.webp", "/ke2.webp"], 
    remain: "còn 9/10 sản phẩm", 
    desc: "Thiết kế tối giản nhưng cực kỳ tiện ích, phù hợp cho mọi không gian bếp hiện đại.",
    brand: "OEM",
    warranty: "6 tháng",
    features: ["Chất liệu thép không gỉ", "Tích hợp khay hứng nước", "Thiết kế nhiều tầng tối ưu không gian"]
  },
  { 
    id: 4, 
    name: "Nồi chiên không dầu", 
    price: "1.000.000", 
    images: ["/noichienkhongdau.webp", "/noi2.webp"], 
    remain: "còn 4/10 sản phẩm", 
    desc: "Nấu ăn lành mạnh không cần dầu mỡ, giữ trọn hương vị tự nhiên của thực phẩm.",
    brand: "Sunhouse",
    warranty: "12 tháng",
    features: ["Dung tích lớn 6 lít", "Công nghệ Rapid Air", "Bảng điều khiển cảm ứng thông minh"]
  },
  { 
    id: 5, 
    name: "Máy hút bụi thông minh", 
    price: "2.000.000", 
    images: ["/mayhuybuithongminh.webp", "/hutbui2.webp"], 
    remain: "còn 1/10 sản phẩm", 
    desc: "Giải phóng sức lao động với khả năng tự động lập bản đồ và dọn dẹp mọi ngóc ngách.",
    brand: "Xiaomi",
    warranty: "12 tháng",
    features: ["Lực hút mạnh 2500Pa", "Điều khiển qua ứng dụng điện thoại", "Tự động quay về trạm sạc"]
  },
  { 
    id: 6, 
    name: "Bộ Nhả Kem Đánh Răng Tự Động", 
    price: "1.500.000", 
    images: ["/bonhakemtudong.webp", "/kem2.webp"], 
    remain: "còn 10/10 sản phẩm", 
    desc: "Sản phẩm gia dụng thông minh giúp phòng tắm luôn gọn gàng và vệ sinh.",
    brand: "Ecoco",
    warranty: "3 tháng",
    features: ["Lắp đặt dán tường không cần khoan", "Chống bụi bẩn, vi khuẩn", "Chất liệu nhựa ABS an toàn"]
  }
];

export default function ProductDetail() {
  const params = useParams(); // ✅ FIX CHÍNH
  const id = params?.id;

  const product = products.find(
    (p) => p.id.toString() === id
  );

  const [index, setIndex] = useState(0);

  // ✅ reset ảnh khi đổi sản phẩm
  useEffect(() => {
 
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <h2>Sản phẩm không tồn tại!</h2>
        </div>
      </>
    );
  }

  const images = product.images;

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← QUAY LẠI TRANG CHỦ
        </Link>
        
        <div className={styles.productWrapper}>
          
          {/* Slider */}
          <div className={styles.imageColumn}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={prev}>❮</button>

              <Image 
                src={images[index]} 
                width={500} 
                height={500} 
                alt={product.name} 
                className={styles.productImage}
              />

              <button onClick={next}>❯</button>
            </div>
          </div>
          
          {/* Info */}
          <div className={styles.infoColumn}>
            <span className={styles.brandName}>{product.brand}</span>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.priceTag}>
              {product.price} VNĐ
            </div>
            
            <div className={styles.description}>
              <span className={styles.stockStatus}>
                <strong>Tình trạng:</strong> {product.remain}
              </span>
              {product.desc}
            </div>

            <button className={styles.buyButton}>
              MUA NGAY
            </button>
          </div>
        </div>

        {/* Thông số + Cam kết */}
        <div className={styles.specSectionWrapper}>
          
          <div className={styles.specBoxFull}>
            <h3 className={styles.specTitle}>Thông số chi tiết</h3>
            <p><strong>Bảo hành:</strong> {product.warranty}</p>
            <ul className={styles.featureList}>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.commitmentBox}>
            <h3 className={styles.commitmentTitle}>Cam kết từ cửa hàng</h3>
            <p>
              Sản phẩm <strong>{product.name}</strong> được phân phối chính hãng.
            </p>
            <ul>
              <li>Giao hàng miễn phí.</li>
              <li>Đổi trả 7 ngày.</li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}