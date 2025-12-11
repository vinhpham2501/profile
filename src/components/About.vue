<template>
  <section id="about" class="about">
    <div class="container-xl">
      <div class="about-content">
        <div class="about-image">
          <div class="profile-glow"><div class="profile-inner"><div class="avatar">
            <img class="avatar-img" alt="Avatar" src="/images/avatar.jpg" />
          </div></div></div>
        </div>
        <div class="about-text">
          <h2 class="section-title">About<span class="highlight">Me</span></h2>
          <h3 class="name">Phạm Trường Vinh</h3>
          <p>
            Tôi là một sinh viên ngành Khoa học Máy tính và tôi 19 tuổi, với niềm đam mê sâu sắc đối với công nghệ
            thông tin. Tôi bị cuốn hút bởi cách công nghệ đang thay đổi cuộc sống của chúng ta và cam kết trở thành
            một phần trong sự thay đổi đó. Tôi có chuyên môn về điện tử và lập trình, cũng như kinh nghiệm làm Kỹ thuật
            viên Mạng.
          </p>
          <p>
            Ngoài ra, tôi còn là một lập trình viên frontend và nhà phát triển web năng động, thành thạo HTML, CSS và
            JavaScript, cùng như các framework như React. Tôi thích tạo ra các trang web phản hồi tốt và thu hút người
            dùng, kết hợp giữa chức năng với thiết kế thẩm mỹ. Bên cạnh đó, tôi có niềm đam mê mạnh mẽ với thiết kế đồ
            họa, nơi tôi thể hiện sự sáng tạo của mình.
          </p>
          <p>
            Tôi tin rằng công nghệ và nghệ thuật có thể phối hợp để tạo ra những trải nghiệm tuyệt vời. Tôi mong muốn
            được đồng góp vào các dự án có tác động và tiếp tục học hỏi trong lĩnh vực này.
          </p>
          <button class="btn-primary" @click="toContact">More About Me</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toContact = () => {
  router.push({ name: 'contact' })
}
</script>
