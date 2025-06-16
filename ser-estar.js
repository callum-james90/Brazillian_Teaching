    const slides = [
      {
        title: "Use of the Diminutive in Portuguese",
        content:""
      },
      {
        title: "How is the diminutive formed?",
        content: "In Portuguese, the diminutive is usually formed by adding the suffixes:<br> -inho / -inha <br> Examples: <br> casa → casinha <br> gato → gatinho <br> -zinho / -zinha <br> Used when the word ends in -s, -r, -z, or a stressed vowel: <br> flor → florzinha <br> café → cafezinho <br> rapaz → rapazinho <br> Note: When using -zinho/-zinha, the final vowel is usually dropped before adding the suffix."
      },
      {
        title: "Uses and meanings",
        content: "<strong>Situation:</strong> Tamanho pequeno (small size) <strong>Example</strong> Ele tem um carrinho de brinquedo. <strong>Meaning:</strong> Small <br> <strong>Situation:</strong> Carinho / Afeto (affection) <strong>Example</strong> Oi, queridinha! <strong>Meaning:</strong> Affectionate <br> <strong>Situation:</strong> Ironia / desprezo (irony / contempt) <strong>Example</strong> Que ideiazinha mais idiota! <strong>Meaning:</strong> Criticism / sarcasm <br> <strong>Situation:</strong> Gentileza / suavização (softening / politeness) <strong>Example</strong> Você pode esperar um minutinho? <strong>Meaning:</strong> Makes the request more polite"
      },
      {
        title: "Pay attention to the tone!",
        content: "The diminutive can completely change its meaning depending on the intonation or context. For example: <br> <strong>'Ele me deu um presentinho.'</strong> <br>→ Can mean something sweet and simple — or something disappointing — depending on the tone."
      },
      {
        title: "Sentence examples",
        content: "1. Tamanho pequeno (literal / literal size) <br><br> 1. O João comprou um <strong>apartamentinho</strong> na praia. <br> 2. Olha esse <strong>livrinho</strong>! Cabe no bolso. <br> 3. Dei um <strong>passeiozinho</strong> de 10 minutos com o cachorro."
      },
      {
        title: "Sentence examples",
        content: " 2. Carinho / Afeto (affection / endearment) <br><br> Oi, amorinho, como foi seu dia? <br> Essa é a minha vozinha querida.<br> Vamos tomar um cafezinho juntos?"
      },
      {
        title: "Sentence examples",
        content: " 3. Ironia / Desprezo (irony / criticism) <br><br> Esse seu planinho não vai dar certo. <br> Ah, você trouxe um presentinho… que generoso! <br> Que comentáriozinho mais desagradável…"
      },
      {
        title: "Sentence examples",
        content: "4. Suavização / Gentileza (softening / politeness) <br><br> Pode esperar só um minutinho? <br> Me dá uma ajudinha, por favor? <br>Vou fazer um favorzinho pra você desta vez."
      },
      {
        title: "Vocabulary",
        content: "livro - livrinho - Small size/ affection <br> mulher - mulherzinha - Can be affection or contempt, depending on the tone <br> cão - cãozinho = Affection <br> casa - casinha - Small size/ affection <br> problema - probleminha - Softening or irony <br> comida - comidinha - Affection or simplicity <br> mão - mãozinha - Affection or used to ask for help <br> beijo - beijinho - Affection <br> mãe - mãezinha - Affection <br> história - historinha - Simplicity, a short story or even contempt"
      }
    ];

    let currentSlide = 0;

    const container = document.getElementById("slides-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const nextSectionBtn = document.getElementById("nextSectionBtn");

    function renderSlide(index) {
      container.innerHTML = `
        <div class="slide active">
          <h2>${slides[index].title}</h2>
          <p>${slides[index].content}</p>
        </div>
      `;

      prevBtn.disabled = index === 0;

      if (index === slides.length - 1) {
        nextBtn.style.display = "none";
        nextSectionBtn.style.display = "inline-block";
      } else {
        nextBtn.style.display = "inline-block";
        nextSectionBtn.style.display = "none";
      }
    }

    prevBtn.addEventListener("click", () => {
      if (currentSlide > 0) {
        currentSlide--;
        renderSlide(currentSlide);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide(currentSlide);
      }
    });

    nextSectionBtn.addEventListener("click", () => {
      window.location.href = "excerise.html"; // Change to next section link if needed
    });

    renderSlide(currentSlide);
