## პროექტის სათაური
„ტექნიკური დავალება “ 

## პროექტის მიზანი
პროექტის მიზანი იყო თიბისიაკადემიის „TBC x USAID“  ვებ-გვერდის ფრონტ-ედნის ანალოგის შექმნა.

## პროექტის სტრუქტურა
პროექტი შედგება სამი ფაილისაგან: index.html, style.css, app.js. 
Index.html ფაილი შეიცავს პროექტის შინაარსობრივ მხარეს: საიტის კონტენტს, ტექსტებს, ჰიპერლინკებს, სხვადასხვა ინფორმაციასა და მცირედ სტილურ ჩანაწერებს— ხაზოვან სტილს, კონკრეტულად, ფონტის დაყენებისთვის, რომლის წყაროც შემოტანილია სტილის ფაილში. თითოეული შინაარსობრივი ელემენტი, თავისი კონტენტის გათვალისწინებით, ჩასმულია შესაბამის შინაარსობრივ ტაგში. ელემენტების უმრავლესობას საჭიროებისამებრ მინიჭებული აქვთ კლასი, აიდი ან სხვა ატრიბუტი. აღნიშნული ატრიბუტები გამოყენებულია სტილის ან ჯავასკრიპტის ფაილში გარკვეული ელემენტის ასარჩევად, ან გამოიყენება მათი რომელიმე ატრიბუტის ღირებულება საჭიროებისამებრ. 
Style.css ფაილი შეიცავს პროექტის სტილურ მხარეს— ჰტმლ ფაილით შემოტანილი შინაარსის დიზაინს. საიტის ყველა ვიზუალური მახასიათებელი დაწერილია ამ ფაილში. ასევე, აქ არის განთავსებული ფონტის ონლაინწყაროები. ასევე, აღნიშნულ ფაილში მედიაქუაერით გაწერილია რესპონსიული დიზაინი, ანუ სხვადასხვა ზომის მოწყობილობის ეკრანისთვის განკუთვნილი დიზაინი. აქვე დაწერილია ანიმაცია, რომელიც ებმის კონკრეტულ ელემენტს ჯავასკრიპტის საშუალებით. 
App.js ფაილი შეიცავს კოდს, რომელიც განსაზღვრავს html ელემენტების გარკვეულ ფუნქციებსა და ქცევებს, მაგალითად:  აქ განთავსებულია კოდი, რომელიც განსაზღვრავს, რომ საიტის სქროლვისას ჰედერი გახდეს გამჭვირვალე; გაიხსნას ნავიგაცია ბურგერმენიუს აიქონზე დაკლიკებისას და პირიქით, დაიხუროს იქსზე დაწკაპუნებისას. აქვე არის განთავსებული სლაიდერის კოდი, რომელიც პასუხისმგებელია სლაიდერში მიმდინარე სხვადასხვა მოვლენებზე, როგორებიცაა: ავტომატური გადაფურცვლა, ღილაკებზე დაჭერით წინ და უკან გადაფურცვლა, წერტილებზე დაწკაპუნების დროს შესაბამის სლაიდზე გადასვლა, ასევე გადასვლის დროს ანიმაციიის ამუშავება. აქ ასევე გაწერილია კოდი, რომელიც ხშრად დასმული შეკითხვების სექციაში განაპირობებს კითხვების ჩამოშლას. ამგვარად, ჯავასკრიპტის ფაილი ემსახურება გარკვეული ხდომილებების აღსრულებას ვებსაიტზე.

## გამოყენებული ტექნოლოგიები
პროექტში css font-face მეთოდით გამოყენებულია ვებ-წყაროები შრიფტისათვის, რომლებიც შემოტანილია სტილის ფაილში ფონტ-ფეისით wix სისტემით. 
გამოყენებულია mediaquery-ის რესპონსიული დიზაინის ელემენტები, რესპონსიული შრიფტი იმართება clamp() მეთოდით.
ზოგიერთი ობიექტის კომპოზიციურად გასანაწილებლად გამოყენებულია gird სისტემა.
css keyframe-ის მეთოდით დაწერილია ანიმაცია, რომელიც აღსრულდება ჯავასკრიპტის მეშვეობით.
სტილის ფაილში საიტის ფერთა გამისთვის გამოყენებულია root-ის ცვლადების მეთოდი, რაც ამარტივებს ფერის მახასიათებლის მართვას.
	Webkit-ის დასაწერად, ანუ სხვადასხვა ვებბროუზერებში თავსებადობის უზრუნველასყოფად, გამოყენებულია Visual Studio Code-ის Autoprefixer-ის დამატება, რომელიც არის npm პაკეტი და კონფიგურირდება Node.js-ისა და npm-ის საშუალებით. 
	Js-ში გამოყენებულია ES6-ის ელემენტები: let და const ცვლადები, ეროუ ფუნქცია, პირობითი წინადადების შემოკლებული ჩანაწერები, Template Literals ჩანაწერი და სხვა. 

## პროექტის გაშვების ინსტრუქცია
პროექტის გაშვება გიტჰაბზე:
1.	შექმენით გიტჰაბის ექაუნთზე საჯარო რეპოზიტორი, პროექტის სახელითა და მცირე აღწერით; შემდეგ გადადით შექმნილ რეპოზიტორიში, წამოიღეთ მისი ვებმისამართი;
2.	ვიზუალ სტუდიოში მენიუდან გახსენით "Source Control"(ვიზუალ სტუდიოში გახსნილი გქონდეთ პროექტის ფოლდერი) და დააჭირეთ  "Initialize Repository";
3.	რის შემდეგაც გამოაჩენს პროექტის ყველა ფაილს და მათ თავზე ტექსტის გრაფას პირველი კომიტის მესიჯისათვის, რომელშც ჩავწერთ მესიჯს; შემდეგ დააჭერთ მესიჯის გრაფის თავზე განთავსებულ "check"-ის ნიშანს; რის შემდეგაც გამოვა ფანჯარა, სადაც მონიშნავთ დასტურს "Yes";
4.	შემდეგ იმავე სექციაში დააჭირეთ ელიფსისის მენიუს, არჩიეთ Pull, Push შემდეგ Push to >> Add remote, რის შემდეგაც გრაფაში ჩააკოპირეთ გიტჰაბიდან აღებული ლინკი enter-ით დაამატეთ და შემდეგ ისევ Pull, Push >> Push to- დან აირჩევთ უკვე დამატებულ რეპოზიტორის; დაელოდებით ჩატვირთვას.
5.	დაბრუნდით გიტჰაბზე რეპოზიტორიში და ნახეთ, რომ პროექტი აიტვირთა. დაურთეთ Readme ფაილი.


პროექტის გაშვება ინტერნეტში:
1.	დომეინი და ჰოსტინგი:
დაარეგისტრირეთ დომეინის სახელი თქვენი პროექტისათვის. არსებობს სხვადასხვა რეგისტრატორები, საიდანაც შეისყიდით დომეინს. შეარჩიეთ ჰოსტინგ პროვაიდერი, მაგალითად, როგორებიცაა: AWS, Google Cloud, Microsoft Azure, Netlify, Vercel და სხვა.
2.	მოამზადეთ პროექტი:
მოახდინეთ თქვენი კოდის ოპტიმიზაცია, დააპატარავეთ ან გააერთიანეთ ფაილები, დააპტარავეთ სურათები და სხვ. დარწმუნდით, რომ თქვენი პროექტი უზრუნველყოფილია კონფიგურაციის გარემოსთვის საჭირო პარამეტრებით.
3.	აარჩიეთ გაშვების მეთოდი:
სტატიკური საიტის ჰოსტინგისთვის შესაფერისი პლატფორმებია: Netlify, Github ფეიჯები, Vercel და სხვ. დინამიკური ვებფეიჯებისთვის საჭიროა შესაბამისი სერვერები, როგორებიცაა: ქლაუდ პროვაიდერები (AWS, Azure, Google Cloud), ტრადიციული ჰოსტინგ პროვაიდერები ან PaaS პროვაიდერები.
4.	გაშვების პარამეტრების კონფიგურაცია:
თუ იყენებთ custom დომეინს, დააყენეთ DNS პარამეტრები, როგორიცაა A ან CNAME ჩანაწერები. დაცული კომუნიკაციისათვის გაააქტიურეთ HTTPS. 
5.	პროექტის გაშვება:
ატვირთეთ თქვენი პროექტის ფაილები ჰოსტინგ პროვაიდერზე. თუ თქვენი პროექტი შეიცავს მონაცემთა ბაზას, დარწმუნდით, რომ შესრულებული გაქვთ მონაცემთა ბაზის მიგრაცია ან სქემის ცვლილებები.
6.	დატესტეთ:
დატესტეთ და დარწმუნით, რომ თქვენი პროექტი მუშაობს სხვადასხვა ვებბროუზერებში. დარწმუნით, რომ ყველა ფუნქციური მახასიათებელი მუშაობს. 
7.	მონიტორინგი და სკალირება:
დააყენეთ მონიტორინგის ხელსაწყოები, რათა დააკვირდეთ ვებაპლიკაციის ფუნქციონირებას. დააკვირდით სერვერის წყაროებს, შეცდომების რაოდენობას, მომხმარებლის ინტერაქციას. თუ თქვენი პროექტი გადატვირთულია, მზად იყავით სკალირებისთვის. ზოგიერთი პროვაიდერი გთავაზობთ ავტოსკალირების საშუალებებს. 
8.	უსაფრთხოება:
დააყენეთ უსაფრთხოების ჰედერები. გქონდეთ დეფენდენსები, ბიბლიოთეკები და სერვერის პროგრამები უსაფრთხოების ზომების დასაცავად.
9.	SEO და ანალიტიკა:
დანერგეთ SEO-ის ეფექტური მეთოდები, რათა გააუმჯობესოთ თქვენი ვებპროექტის ხილვადობა ძებნისას. დააყენეთ ანალიზის ხელსაწყოები (მაგ. Google Analytics), რათა მიიღოთ ინფორმაცია მომხმარებელთა ქცევის შესახებ.
10.	ინფორმირება:
გაავრცელეთ ინფორმაცია საიტის გაშვების შესახებ სხვადასხვა მედიის საშუალებით. 

