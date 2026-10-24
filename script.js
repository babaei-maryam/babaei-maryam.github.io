/* ۸) داده‌ها: برای افزودن بیمه‌ی جدید فقط یک مورد به این لیست اضافه کن */
const types = [
  { id:"third", name:"شخص ثالث", text:"جبران خسارت مالی و جانی که به دیگران وارد می‌کنی. برای خودرو الزامی است.", tip:"به سقف تعهدات توجه کن." },
  { id:"body",  name:"بدنه",     text:"جبران خسارت به خودروی خودت در تصادف، سرقت و حوادث دیگر.", tip:"فرانشیز و استثنائات را بپرس." },
  { id:"life",  name:"عمر",      text:"حمایت مالی از خانواده و گاهی پس‌انداز بلندمدت.", tip:"هدف را مشخص کن: حمایت یا سرمایه‌گذاری." },
  { id:"health",name:"درمان",    text:"پوشش بخشی از هزینه‌های بستری، جراحی و خدمات درمانی.", tip:"شبکه‌ی درمانی طرف قرارداد را بررسی کن." },
  { id:"fire",  name:"آتش‌سوزی", text:"پوشش خسارت ساختمان و وسایل در برابر آتش‌سوزی و برخی حوادث.", tip:"ارزش واقعی ملک را درست اعلام کن." },
  { id:"travel",  name:"مسافرتی", text:"پوشش هزینه‌های درمان و حوادث در سفر خارجی.", tip:"کشور مقصد و مدت سفر را دقیق اعلام کن." },

];

const chips = document.getElementById("chips");
const detail = document.getElementById("detail");
const select = document.getElementById("typeSelect");

/* نمایش جزئیات نوع انتخاب‌شده */
function show(id){
  const t = types.find(x => x.id === id);
  detail.innerHTML = "<h3>بیمه " + t.name + "</h3><p>" + t.text + "</p><p><strong>نکته:</strong> " + t.tip + "</p>";
  chips.querySelectorAll(".chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.id === id));
  select.value = id; /* فرم هم هماهنگ می‌شود */
}

/* ساخت دکمه‌ها و گزینه‌های فرم از روی لیست */
types.forEach(t => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "chip"; b.textContent = t.name; b.dataset.id = t.id;
  b.addEventListener("click", () => show(t.id));
  chips.appendChild(b);
  select.add(new Option("بیمه " + t.name, t.id));
});
show(types[0].id);

/* فرم: فعلاً فقط پیام تأیید نشان می‌دهد (ارسال واقعی به سرور نیاز دارد) */
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  document.getElementById("msg").textContent = name + " عزیز، درخواستت ثبت شد. به‌زودی تماس می‌گیرم.";
  e.target.reset(); select.value = types[0].id;
});
