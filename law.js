const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "الرؤية",
          desc:
            ".الرؤية : تقدم على ضرورة ترسيخ المفاهيم القانونية الصحيحة المنسجمة مع التطور البشري، فهذا التطور يحتاج لأن يكون لدى الإنسان المعاصر معرفة و إدراك لماهية الحقوق التي يتمتع بها والواجبات الملقاة على عاتقه ، مما يمكنع من إدارة الدولة التي ينتمي إليها لمساهمته في بنائها وتطويرها وتذليل الصعوبات التي تعترضها ، وكل ذلك سينعكس إيجابا على استقرار المجتمع وخضوعه للضوابط القانونية التي تنظر لجميع الأفراد بشكل متساو دون تمييز أو إقصاء",
          photo:
            "https://iusr.university/wp-content/uploads/2023/10/logo_iusr_gradient.png"
        },
        {
          id: 2,
          title: "الرسالة",
          desc:
            "تبنى المجتمعات من هلال احترام القانون والإلتزام به وجعله مرجعية لجميع أفراد المجتمع وبحيث يكون خيا ر اللجوء للمحاكم ممكنا في حال هضم الحقوق أو الإساءة أو إرتكاب الأفعال المنافية للحقوق العامة ،وهذا كلع يجعل من المجتمع متماسكا صلبا لا فرقانية بين الأفراد أو على أساس اللون أو العرق أو الدين أو المركز الاجتماعي أو الانتماء ، بل يجعل الكل يشعرون بإنتمائهم لوطن أو دولة هي مظلة لجميع أبنائها .",
          photo:
            "https://www.elmin7a.com/wp-content/uploads/2020/04/faculty-of-law-min.png"
        },
        {
          id: 3,
          title: "الاهداف",
          desc:
            "قوم أهداف كلية الحقوق على إعداد جيل يحتكم للقانون وللضوابط الدستورية في تعاملاته المختلفة ، بحبث تكون حرية الرأي والفكر و الاجتماع و التعبير مثانة ومتاحة للجميع دون تميز، وهذا يؤدي لإنتشار الوعي في المجتمع و التقليل من حجم الجرائم والمخالفات او التجاوزات التي تؤثر سلبا على بناء الدولة.",
          photo:
            "https://blog-ar.kuwaitmart.com/wp-content/uploads/2024/06/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%AD%D8%A7%D9%85%D9%8A-%D8%A8%D8%A7%D9%84%D8%AC%D9%87%D8%B1%D8%A7%D8%A13.webp"
        },
        
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");

function toggleDetails(event) {
    const details = event.querySelector('p');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
