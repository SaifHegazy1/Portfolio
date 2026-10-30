/* ==========================================================================
   LANGUAGE SWITCHER (English <-> Arabic)
   --------------------------------------------------------------------------
   How it works: every visible text node on the page is looked up (trimmed) in
   the AR dictionary below. The original English text is remembered on the
   node, so switching back restores it exactly. Anything not in the dictionary
   (tool names, emails, numbers...) is simply left as it is.

   To change an Arabic sentence: edit its value in AR.
   To add new content to the site: add "English text": "Arabic text" to AR.
   ========================================================================== */
(function () {
    "use strict";

    const AR = {
    "Home": "الرئيسية",
    "About": "نبذة عني",
    "Services": "الخدمات",
    "Certifications": "الشهادات",
    "Portfolio": "الأعمال",
    "Contact": "تواصل معي",
    "Hello ,my name is": "مرحباً، اسمي",
    "Saif Hegazy": "سيف حجازي",
    "I'm a": "أنا",
    "A Data Analysis Geek who loves to explore data and extract insights.": "شغوف بتحليل البيانات، أحب استكشافها واستخراج الرؤى منها.",
    "Download CV": "تحميل السيرة الذاتية",
    "About Me": "من أنا",
    "I'm Saif Hegazy": "أنا سيف حجازي",
    "A Data Analyst": "محلل بيانات",
    "Motivated undergraduate Data Science student at Alexandria University (CGPA 3.77) with a strong foundation in data analysis, machine learning, and data visualization. I build end-to-end analytics projects, from data warehousing and ETL to interactive Power BI dashboards and deployed Streamlit models.": "طالب علوم بيانات متحمس بجامعة الإسكندرية (المعدل التراكمي 3.77)، لديّ أساس قوي في تحليل البيانات وتعلّم الآلة وتصوير البيانات. أبني مشاريع تحليلية متكاملة من البداية للنهاية، بدءاً من مستودعات البيانات وعمليات ETL وصولاً إلى لوحات Power BI التفاعلية ونماذج Streamlit المنشورة.",
    "I keep sharpening my skills through hands-on training at Orange Digital Center, TechTrek, DEPI, and ITI, and I'm eager to contribute to meaningful, data-driven projects.": "أواصل تطوير مهاراتي من خلال التدريب العملي في Orange Digital Center وTechTrek وDEPI وITI، وأتطلع للمساهمة في مشاريع هادفة قائمة على البيانات.",
    "Birthday :": "تاريخ الميلاد :",
    "23 jul 2005": "23 يوليو 2005",
    "Age :": "العمر :",
    "website :": "الموقع :",
    "Email :": "البريد الإلكتروني :",
    "Degree :": "الدرجة العلمية :",
    "Undergraduate Data Science Major": "طالب بكالوريوس علوم البيانات",
    "Phone :": "الهاتف :",
    "City :": "المدينة :",
    "Alexandria": "الإسكندرية",
    "Languages :": "اللغات :",
    "Arabic (Native), English (B2)": "العربية (اللغة الأم)، الإنجليزية (B2)",
    "Hire Me": "وظّفني",
    "Expert": "خبير",
    "Advanced": "متقدم",
    "Proficient": "متمكن",
    "Machine Learning": "تعلّم الآلة",
    "Data Modeling": "نمذجة البيانات",
    "Education": "التعليم",
    "OCT 2023 - now": "أكتوبر 2023 - الآن",
    "Data Science Bachelor": "بكالوريوس علوم البيانات",
    "Studies Data Science at the Faculty of Computers and Data Science, Alexandria University, with CGPA: 3.77": "أدرس علوم البيانات بكلية الحاسبات وعلوم البيانات، جامعة الإسكندرية، بمعدل تراكمي 3.77",
    "Oct 2026": "أكتوبر 2026",
    "Data Analytics using AI — Orange Digital Center": "تحليل البيانات باستخدام الذكاء الاصطناعي — Orange Digital Center",
    "Completed a 30-hour training program covering data handling with Excel, Power BI, and Python, building dashboards in Excel and Power BI, data visualization and storytelling in Python, and an overview of Tableau. Delivered hands-on projects using Excel, Power BI, and Python.": "أنهيت برنامجاً تدريبياً مدته 30 ساعة يغطي التعامل مع البيانات باستخدام Excel وPower BI وPython، وبناء لوحات المعلومات في Excel وPower BI، وتصوير البيانات وسرد القصة بها باستخدام Python، ونظرة عامة على Tableau. نفّذت مشاريع عملية باستخدام Excel وPower BI وPython.",
    "July 2026 - Sep 2026": "يوليو 2026 - سبتمبر 2026",
    "TechTrek Advanced Data Science Training": "تدريب علوم البيانات المتقدم — TechTrek",
    "Completed a 140-hour online professional training program in Advanced Data Science offered by TechTrek, fulfilling both the academic and practical requirements of the program.": "أنهيت برنامجاً تدريبياً احترافياً أونلاين مدته 140 ساعة في علوم البيانات المتقدمة من TechTrek، واستوفيت المتطلبات الأكاديمية والعملية للبرنامج.",
    "June 2025 - Dec 2025": "يونيو 2025 - ديسمبر 2025",
    "DEPI Data Analysis Training": "تدريب تحليل البيانات — DEPI",
    "Joined in June 2025 to enhance my data analysis skills through working on projects related to Excel, MySQL, Power BI and Python, and started getting freelance tasks through freelancing platforms.": "انضممت في يونيو 2025 لتطوير مهاراتي في تحليل البيانات من خلال العمل على مشاريع باستخدام Excel وMySQL وPower BI وPython، وبدأت في تنفيذ مهام عمل حر عبر منصات العمل الحر.",
    "July 2025 - Aug 2025": "يوليو 2025 - أغسطس 2025",
    "Frontend Summer Training": "التدريب الصيفي لتطوير الواجهات الأمامية",
    "Trained on frontend development to display the insights gained from data analysis projects in a user-friendly, well-designed website.": "تدربت على تطوير الواجهات الأمامية لعرض الرؤى المستخلصة من مشاريع تحليل البيانات في موقع سهل الاستخدام ومصمم بعناية.",
    "Experience": "الخبرات",
    "Jul 2024 - Present": "يوليو 2024 - الآن",
    "Teacher Assistant & Student Data Manager — Perfection In Physics": "مساعد مدرس ومسؤول بيانات الطلاب — Perfection In Physics",
    "Manage student data end to end, from data entry and record organization to performance analysis, and send regular follow-up reports to parents so they stay updated on their children's level. Alongside this, I tutor high school students in physics, providing personalized academic support and mentorship.": "أدير بيانات الطلاب بالكامل، بدءاً من إدخال البيانات وتنظيم السجلات وصولاً إلى تحليل الأداء، وأرسل تقارير متابعة دورية لأولياء الأمور ليبقوا على اطلاع بمستوى أبنائهم. إلى جانب ذلك، أدرّس الفيزياء لطلاب المرحلة الثانوية وأقدم لهم دعماً أكاديمياً ومتابعة شخصية.",
    "Customer Churn Analytics & Prediction — Orange Digital Center": "تحليل والتنبؤ بانسحاب العملاء (Churn) — Orange Digital Center",
    "I built an end-to-end churn analytics project as my final project in the Data Analytics Using AI track at Orange Digital Center. I cleaned and prepared about 51K customer records in Power Query, engineered new features in Python, then trained and compared four machine learning models (Random Forest, Logistic Regression, Decision Tree and SVM) to predict which customers are likely to leave. I then designed an interactive 5-page Power BI dashboard that tells the story from executive KPIs to churn drivers, service quality, predictive risk segments and model performance. The analysis showed a 28.77% churn rate, with churn driven by ageing handsets and falling usage rather than network quality, and flagged 4,970 high-risk customers.": "بنيت مشروعاً متكاملاً لتحليل انسحاب العملاء كمشروع التخرج لمسار تحليل البيانات باستخدام الذكاء الاصطناعي في Orange Digital Center. نظّفت وجهّزت نحو 51 ألف سجل عميل باستخدام Power Query، وأنشأت خصائص جديدة باستخدام Python، ثم درّبت وقارنت أربعة نماذج تعلّم آلة (Random Forest وLogistic Regression وDecision Tree وSVM) للتنبؤ بالعملاء المحتمل مغادرتهم. بعد ذلك صممت لوحة Power BI تفاعلية من 5 صفحات تروي القصة بدءاً من مؤشرات الأداء التنفيذية وصولاً إلى أسباب الانسحاب وجودة الخدمة وشرائح الخطورة المتوقعة وأداء النماذج. أظهر التحليل معدل انسحاب 28.77%، وأن الانسحاب يرتبط بقِدم الأجهزة وتراجع الاستخدام وليس بجودة الشبكة، وحدّد 4,970 عميلاً عالي الخطورة.",
    "Pizza Sales Analysis Dashboard — Orange Digital Center": "تحليل مبيعات البيتزا — Orange Digital Center",
    "I built an interactive 4-page Power BI dashboard on a full year of pizza sales (48,620 line items and 21K orders) as a training task at Orange Digital Center. I cleaned and transformed the data in Power Query, including converting text dates and creating day, month, year and hour fields, then created calculated columns and DAX measures for KPIs such as average order value, multi-pizza order share and Pareto cumulative percentage. The report includes page navigation, slicers, a day-by-hour heatmap and a Pareto analysis that reveal peak ordering times, top-selling pizzas and how customers order.": "بنيت لوحة Power BI تفاعلية من 4 صفحات لسنة كاملة من مبيعات البيتزا (48,620 بنداً و21 ألف طلب) كمهمة تدريبية في Orange Digital Center. نظّفت البيانات وحوّلتها في Power Query، بما في ذلك تحويل التواريخ النصية وإنشاء حقول اليوم والشهر والسنة والساعة، ثم أنشأت أعمدة محسوبة ومقاييس DAX لمؤشرات مثل متوسط قيمة الطلب ونسبة الطلبات متعددة البيتزا والنسبة التراكمية لتحليل باريتو. يتضمن التقرير التنقل بين الصفحات والفلاتر وخريطة حرارية لليوم والساعة وتحليل باريتو، وتكشف عن أوقات ذروة الطلب وأكثر أنواع البيتزا مبيعاً وطريقة طلب العملاء.",
    "Sales Analysis Dashboard — Orange Digital Center": "تحليل المبيعات — Orange Digital Center",
    "I built an interactive 5-page Power BI dashboard as part of the Data Analytics Using AI track at Orange Digital Center. I imported and cleaned data from multiple sources, modeled Sales, Customers, Products, and Regions in a star schema, and created calculated columns and DAX measures for KPIs such as total sales, profit, profit margin, and orders. The report includes slicers, maps, and drill-down tables that reveal trends across time, products, customers, and regions.": "بنيت لوحة Power BI تفاعلية من 5 صفحات ضمن مسار تحليل البيانات باستخدام الذكاء الاصطناعي في Orange Digital Center. استوردت ونظّفت بيانات من مصادر متعددة، وصمّمت نموذجاً نجمياً (Star Schema) للمبيعات والعملاء والمنتجات والمناطق، وأنشأت أعمدة محسوبة ومقاييس DAX لمؤشرات مثل إجمالي المبيعات والربح وهامش الربح والطلبات. يتضمن التقرير فلاتر وخرائط وجداول تفصيلية تكشف الاتجاهات عبر الزمن والمنتجات والعملاء والمناطق.",
    "June 2026 - July 2026": "يونيو 2026 - يوليو 2026",
    "Bank Account Fraud Detection Model": "نموذج الكشف عن الاحتيال في الحسابات البنكية",
    "I built an end-to-end fraud detection solution using Python, scikit-learn, Power BI, and Streamlit. The project included designing a data warehouse, documenting every field in a data dictionary, creating interactive Power BI visualizations, training a machine learning model with a strong focus on generalization, and deploying a Streamlit app that predicts the probability of fraud for a given account with high accuracy.": "بنيت حلاً متكاملاً للكشف عن الاحتيال باستخدام Python وscikit-learn وPower BI وStreamlit. شمل المشروع تصميم مستودع بيانات، وتوثيق كل حقل في قاموس بيانات، وإنشاء تصورات تفاعلية في Power BI، وتدريب نموذج تعلّم آلة مع تركيز قوي على التعميم، ونشر تطبيق Streamlit يتنبأ باحتمالية الاحتيال لحساب معين بدقة عالية.",
    "Nov 2025 - Dec 2025": "نوفمبر 2025 - ديسمبر 2025",
    "Data Warehouse for Predictive Maintenance Project": "مشروع مستودع بيانات للصيانة التنبؤية",
    "I engineered a robust data warehouse using MySQL to centralize and consolidate maintenance data from multiple disparate sources. I designed and implemented end-to-end ETL processes to clean, transform, and load raw data into structured tables optimized for complex analytical querying. This infrastructure served as the foundation for predictive maintenance strategies, enabling real-time monitoring of production floor health, cost analysis, and quality metrics through high-performance dashboards. This project significantly improved the ability to forecast equipment failures and optimize maintenance schedules.": "صممت مستودع بيانات متيناً باستخدام MySQL لتجميع بيانات الصيانة من مصادر متفرقة متعددة. وصممت ونفذت عمليات ETL متكاملة لتنظيف البيانات وتحويلها وتحميلها في جداول منظمة ومحسّنة للاستعلامات التحليلية المعقدة. شكّلت هذه البنية الأساس لاستراتيجيات الصيانة التنبؤية، وأتاحت مراقبة صحة خط الإنتاج وتحليل التكاليف ومقاييس الجودة عبر لوحات معلومات عالية الأداء، مما حسّن القدرة على توقع أعطال المعدات وتحسين جداول الصيانة.",
    "Sep 2025 - Oct 2025": "سبتمبر 2025 - أكتوبر 2025",
    "E-Commerce Gift Store Dashboard": "لوحة معلومات متجر هدايا إلكتروني",
    "I developed an analytical dashboard for an online gift store to track sales, customers, and product performance. The project began with data stored in a MySQL database, where I performed data cleaning and preprocessing to ensure accuracy and consistency. I then created SQL views to retrieve and structure the required data efficiently, which was imported into Excel via Power Query. Using the transformed data, I built interactive Excel dashboards that visualize key business metrics such as revenue trends, customer behavior, and top-selling products — providing a complete view of store performance and insights for better decision-making.": "طورت لوحة تحليلية لمتجر هدايا إلكتروني لمتابعة المبيعات والعملاء وأداء المنتجات. بدأ المشروع ببيانات مخزنة في قاعدة بيانات MySQL، حيث نظّفتها وجهزتها لضمان الدقة والاتساق. ثم أنشأت SQL Views لاسترجاع البيانات المطلوبة وتنظيمها بكفاءة، واستوردتها إلى Excel عبر Power Query. وباستخدام البيانات المحولة، بنيت لوحات Excel تفاعلية تعرض مؤشرات الأعمال الرئيسية مثل اتجاهات الإيرادات وسلوك العملاء والمنتجات الأكثر مبيعاً، لتقدم صورة كاملة عن أداء المتجر ورؤى تدعم اتخاذ القرار.",
    "Aug 2025 - Sep 2025": "أغسطس 2025 - سبتمبر 2025",
    "Retail Stores Dashboard": "لوحة معلومات متاجر التجزئة",
    "I created an interactive Excel dashboard to analyze performance across multiple retail stores. Starting with raw CSV files, I used Power Query for data cleaning and preprocessing — handling missing values, unifying formats, and preparing datasets for analysis. The cleaned data was then visualized through dynamic Excel dashboards, highlighting key insights such as sales performance, profit trends, regional comparisons, and top-performing products. This project provided a clear view of global store operations and supported data-driven business decisions.": "أنشأت لوحة Excel تفاعلية لتحليل أداء عدة متاجر تجزئة. بدءاً من ملفات CSV الخام، استخدمت Power Query لتنظيف البيانات وتجهيزها، من معالجة القيم المفقودة وتوحيد الصيغ وإعداد مجموعات البيانات للتحليل. ثم عرضت البيانات النظيفة عبر لوحات Excel ديناميكية تبرز رؤى رئيسية مثل أداء المبيعات واتجاهات الربح والمقارنات الإقليمية وأفضل المنتجات أداءً. قدّم المشروع صورة واضحة لعمليات المتاجر ودعم قرارات الأعمال المبنية على البيانات.",
    "Data Cleaning & Preparation": "تنظيف البيانات وتجهيزها",
    "Using Python, Excel, and Power Query to identify, correct, and prepare raw data from multiple sources for accurate analysis.": "استخدام Python وExcel وPower Query لاكتشاف الأخطاء وتصحيحها وتجهيز البيانات الخام من مصادر متعددة لتحليل دقيق.",
    "Power BI Dashboards": "لوحات Power BI",
    "Designing interactive multi-page reports with slicers, maps, and drill-downs that communicate insights clearly.": "تصميم تقارير تفاعلية متعددة الصفحات بفلاتر وخرائط وتفاصيل تعمّق توصل الرؤى بوضوح.",
    "DAX & Data Modeling": "DAX ونمذجة البيانات",
    "Building star schemas, calculated columns, and DAX measures that power reliable KPIs.": "بناء نماذج نجمية وأعمدة محسوبة ومقاييس DAX تدعم مؤشرات أداء موثوقة.",
    "Excel Dashboards & Reporting": "لوحات Excel والتقارير",
    "Creating dynamic Excel dashboards with Power Query and generating regular, automated reports.": "إنشاء لوحات Excel ديناميكية باستخدام Power Query وإعداد تقارير دورية وآلية.",
    "SQL Querying": "استعلامات SQL",
    "Writing optimized MySQL queries and views to extract, filter, and aggregate large datasets.": "كتابة استعلامات MySQL وViews محسّنة لاستخراج مجموعات البيانات الكبيرة وتصفيتها وتجميعها.",
    "Statistical Analysis": "التحليل الإحصائي",
    "Applying Python and Excel for descriptive and inferential statistics to uncover trends.": "تطبيق Python وExcel في الإحصاء الوصفي والاستدلالي لاكتشاف الاتجاهات.",
    "Machine Learning & Deployment": "تعلّم الآلة والنشر",
    "Building predictive models with Python (scikit-learn) and deploying them as Streamlit apps.": "بناء نماذج تنبؤية باستخدام Python (scikit-learn) ونشرها كتطبيقات Streamlit.",
    "Data Warehousing & ETL": "مستودعات البيانات وETL",
    "Designing data warehouses and reliable ETL pipelines that keep data flowing cleanly from source to report.": "تصميم مستودعات بيانات وخطوط ETL موثوقة تضمن انسياب البيانات بنظافة من المصدر إلى التقرير.",
    "Data Storytelling & BI Consulting": "سرد القصص بالبيانات واستشارات BI",
    "Turning data into clear visual stories and advising on KPI design for better business decisions.": "تحويل البيانات إلى قصص بصرية واضحة وتقديم المشورة في تصميم مؤشرات الأداء لقرارات أعمال أفضل.",
    "Data Analyst Specialist": "أخصائي تحليل بيانات",
    "Digital Egypt Pioneers Initiative (DEPI) — sponsored by Egypt's Ministry of Communications and Information Technology": "مبادرة رواد مصر الرقمية (DEPI) — برعاية وزارة الاتصالات وتكنولوجيا المعلومات المصرية",
    "June – December 2025": "يونيو – ديسمبر 2025",
    "View Certificate": "عرض الشهادة",
    "Advanced Frontend Web Development (ReactJS)": "تطوير واجهات الويب المتقدم (ReactJS)",
    "Information Technology Institute (ITI) — 78-hour course": "معهد تكنولوجيا المعلومات (ITI) — دورة 78 ساعة",
    "20 Jul – 3 Aug 2025": "20 يوليو – 3 أغسطس 2025",
    "Advanced Data Science": "علوم البيانات المتقدمة",
    "TechTrek — Professional Training Program (140 hours, Online)": "TechTrek — برنامج تدريب احترافي (140 ساعة، أونلاين)",
    "13 Jul – 20 Sep 2026": "13 يوليو – 20 سبتمبر 2026",
    "Data Science": "علوم البيانات",
    "Customer Churn Analytics & Prediction": "تحليل والتنبؤ بانسحاب العملاء (Churn)",
    "An End-to-End Project Using Excel, Python, Machine Learning & Power BI": "مشروع متكامل باستخدام Excel وPython وتعلّم الآلة وPower BI",
    "Latest": "الأحدث",
    "Feature Engineering": "هندسة الخصائص",
    "Data Storytelling": "سرد القصص بالبيانات",
    "Cleaned and preprocessed about 51K customer records using Power Query in Excel, then continued the preprocessing and built new features with Python.": "نظّفت وجهّزت نحو 51 ألف سجل عميل باستخدام Power Query في Excel، ثم واصلت المعالجة وأنشأت خصائص جديدة باستخدام Python.",
    "Trained and compared 4 classification models (Random Forest, Logistic Regression, Decision Tree, SVM); Random Forest performed best with 63.8% accuracy and a 0.48 F1 score, catching about 6 in 10 churners.": "درّبت وقارنت 4 نماذج تصنيف (Random Forest وLogistic Regression وDecision Tree وSVM)؛ وكان Random Forest الأفضل بدقة 63.8% ومقياس F1 يساوي 0.48، ويلتقط نحو 6 من كل 10 عملاء منسحبين.",
    "Designed a 5-page interactive Power BI dashboard (Executive Overview, Churn Drivers, Usage, Revenue & Service Quality, Predictive Insights, Model Performance) with slicers, a heatmap and page navigation, following data storytelling principles.": "صممت لوحة Power BI تفاعلية من 5 صفحات (نظرة تنفيذية عامة، أسباب الانسحاب، الاستخدام والإيرادات وجودة الخدمة، الرؤى التنبؤية، أداء النماذج) مع فلاتر وخريطة حرارية وتنقل بين الصفحات، وفق مبادئ سرد القصص بالبيانات.",
    "Surfaced key insights: a 28.77% churn rate, customers with handsets older than 2 years churning at 36% versus 23% for handsets under 6 months, and churn driven by ageing handsets and falling usage rather than dropped or blocked calls.": "استخلصت رؤى رئيسية: معدل انسحاب 28.77%، وانسحاب 36% من العملاء ذوي الأجهزة الأقدم من سنتين مقابل 23% لأجهزة أقل من 6 أشهر، وأن الانسحاب يرتبط بقِدم الأجهزة وتراجع الاستخدام وليس بالمكالمات المقطوعة أو المحظورة.",
    "Segmented customers by predicted risk, identifying 4,970 high-risk customers and about 249K in revenue at risk.": "قسّمت العملاء حسب الخطورة المتوقعة، وحددت 4,970 عميلاً عالي الخطورة ونحو 249 ألفاً من الإيرادات المعرضة للخسارة.",
    "Full Project Link": "رابط المشروع كاملاً",
    "Pizza Sales Analysis Dashboard": "لوحة تحليل مبيعات البيتزا",
    "An Interactive 4-Page Report Using Power BI & DAX": "تقرير تفاعلي من 4 صفحات باستخدام Power BI وDAX",
    "Data Cleaning": "تنظيف البيانات",
    "Data Visualization": "تصوير البيانات",
    "Imported and cleaned a full year of pizza sales data (48,620 line items, 21K orders) using Power Query, converting text dates and creating day, month, year and hour fields.": "استوردت ونظّفت سنة كاملة من بيانات مبيعات البيتزا (48,620 بنداً و21 ألف طلب) باستخدام Power Query، مع تحويل التواريخ النصية وإنشاء حقول اليوم والشهر والسنة والساعة.",
    "Ran data quality checks for nulls, duplicates, outliers and missing days before building the report.": "أجريت فحوصات جودة البيانات للقيم الفارغة والمكررة والشاذة والأيام المفقودة قبل بناء التقرير.",
    "Built calculated columns and DAX measures (Avg Order Value, Multi-Pizza Orders %, Pareto cumulative %) to drive the KPIs.": "أنشأت أعمدة محسوبة ومقاييس DAX (متوسط قيمة الطلب، نسبة الطلبات متعددة البيتزا، النسبة التراكمية لباريتو) لتغذية مؤشرات الأداء.",
    "Designed a 4-page interactive report (Executive Overview, Time Patterns, Menu Performance, Orders and Baskets) with slicers, a day-by-hour heatmap, a Pareto chart and page navigation.": "صممت تقريراً تفاعلياً من 4 صفحات (نظرة تنفيذية، أنماط الوقت، أداء القائمة، الطلبات والسلال) مع فلاتر وخريطة حرارية لليوم والساعة ومخطط باريتو وتنقل بين الصفحات.",
    "Surfaced key insights: 817.86K in revenue, orders peaking at lunch (12:00 to 13:00) and dinner (17:00 to 18:00), 62% of orders containing more than one pizza, and 22 of 32 pizzas needed to reach 80% of revenue.": "استخلصت رؤى رئيسية: إيرادات 817.86 ألفاً، وذروة الطلبات عند الغداء (12:00 إلى 13:00) والعشاء (17:00 إلى 18:00)، و62% من الطلبات تحتوي على أكثر من بيتزا، وأن 22 من أصل 32 صنفاً تحقق 80% من الإيرادات.",
    "Sales Analysis Dashboard": "لوحة تحليل المبيعات",
    "An Interactive 5-Page Report Using Power BI & DAX": "تقرير تفاعلي من 5 صفحات باستخدام Power BI وDAX",
    "Imported, cleaned, and prepared data from multiple Excel/CSV sources using Power Query.": "استوردت ونظّفت وجهّزت بيانات من مصادر Excel وCSV متعددة باستخدام Power Query.",
    "Designed a star schema linking the Sales fact table to the Customers, Products, and Regions dimensions.": "صممت نموذجاً نجمياً يربط جدول حقائق المبيعات بأبعاد العملاء والمنتجات والمناطق.",
    "Built 5 calculated columns and 4 DAX measures (Total Sales, Total Profit, Profit Margin %, Total Orders) to drive the KPIs.": "أنشأت 5 أعمدة محسوبة و4 مقاييس DAX (إجمالي المبيعات، إجمالي الربح، هامش الربح %، إجمالي الطلبات) لتغذية مؤشرات الأداء.",
    "Designed a 5-page interactive report (Executive Overview, Sales Trends, Product Analysis, Customer Analysis, Regional Analysis) with slicers, maps, matrices, and page navigation.": "صممت تقريراً تفاعلياً من 5 صفحات (نظرة تنفيذية، اتجاهات المبيعات، تحليل المنتجات، تحليل العملاء، التحليل الإقليمي) مع فلاتر وخرائط ومصفوفات وتنقل بين الصفحات.",
    "Surfaced key insights: $159.98M in sales, a stable ~37% profit margin, Bikes driving ~85% of revenue, and North America generating ~77% of sales.": "استخلصت رؤى رئيسية: مبيعات 159.98 مليون دولار، وهامش ربح مستقر عند نحو 37%، وفئة الدراجات تمثل نحو 85% من الإيرادات، وأمريكا الشمالية تحقق نحو 77% من المبيعات.",
    "An End-to-End Machine Learning Project Using Python, Power BI & Streamlit": "مشروع تعلّم آلة متكامل باستخدام Python وPower BI وStreamlit",
    "Data Warehousing": "مستودعات البيانات",
    "Designed a Data Warehouse and a full Data Dictionary to organize and document every field before analysis began.": "صممت مستودع بيانات وقاموس بيانات كاملاً لتنظيم وتوثيق كل حقل قبل بدء التحليل.",
    "Built an interactive Power BI dashboard to explore the data and uncover the key patterns behind fraudulent activity.": "بنيت لوحة Power BI تفاعلية لاستكشاف البيانات وكشف الأنماط الرئيسية وراء الأنشطة الاحتيالية.",
    "Trained a Machine Learning model in Python with a strong focus on generalization, deliberately working to minimize overfitting.": "درّبت نموذج تعلّم آلة باستخدام Python مع تركيز قوي على التعميم، وعملت عمداً على تقليل فرط التخصيص (Overfitting).",
    "Deployed a Streamlit web app that uses the model to predict the probability of fraud on a given account with high accuracy.": "نشرت تطبيق ويب باستخدام Streamlit يستخدم النموذج للتنبؤ باحتمالية الاحتيال في حساب معين بدقة عالية.",
    "Full Project on GitHub": "المشروع كاملاً على GitHub",
    "Data Warehouse for Predictive Maintenance": "مستودع بيانات للصيانة التنبؤية",
    "A Data Engineering & Analysis Project Using MySQL": "مشروع هندسة وتحليل بيانات باستخدام MySQL",
    "Built a data warehouse in MySQL to consolidate maintenance data coming in from multiple separate sources.": "بنيت مستودع بيانات في MySQL لتجميع بيانات الصيانة القادمة من مصادر متعددة منفصلة.",
    "Designed end-to-end ETL processes to clean, transform, and load the data into tables structured for fast analysis.": "صممت عمليات ETL متكاملة لتنظيف البيانات وتحويلها وتحميلها في جداول منظمة للتحليل السريع.",
    "Enabled efficient querying and reporting that supports predictive maintenance strategies on the production floor.": "أتحت استعلامات وتقارير فعّالة تدعم استراتيجيات الصيانة التنبؤية في خط الإنتاج.",
    "SQL Data Analysis Project": "مشروع تحليل بيانات باستخدام SQL",
    "A Data Analysis Project Using MySQL": "مشروع تحليل بيانات باستخدام MySQL",
    "Used MySQL to perform data cleaning and normalization on the raw dataset.": "استخدمت MySQL لتنظيف البيانات الخام وتطبيعها.",
    "Aggregated the data needed for reporting into dedicated SQL views.": "جمّعت البيانات اللازمة للتقارير في SQL Views مخصصة.",
    "Imported the views into Excel through Power Query to visualize the outcomes in a well-designed dashboard.": "استوردت الـ Views إلى Excel عبر Power Query لعرض النتائج في لوحة معلومات مصممة بعناية.",
    "Power BI Data Analysis & Visualization Project": "مشروع تحليل وتصوير البيانات باستخدام Power BI",
    "A Data Analysis & Visualization Project Using Power BI": "مشروع تحليل وتصوير بيانات باستخدام Power BI",
    "Cleaned, normalized, and decoded hospital data across US states using Power BI and Power Query.": "نظّفت وطبّعت وفكّكت ترميز بيانات المستشفيات عبر الولايات الأمريكية باستخدام Power BI وPower Query.",
    "Built fully responsive dashboards that surface clear, actionable insights for data-driven decision-making.": "بنيت لوحات معلومات متجاوبة بالكامل تعرض رؤى واضحة قابلة للتنفيذ لدعم القرارات المبنية على البيانات.",
    "Contact Me": "تواصل معي",
    "Any Questions ?": "عندك أي استفسار؟",
    "It's Pleasure Working for you": "يسعدني العمل معك",
    "WhatsApp": "واتساب",
    "Office": "المكتب",
    "Email": "البريد الإلكتروني",
    "Website": "الموقع",
    "SEND ME A MESSAGE": "أرسل لي رسالة",
    "I respond to all Messages": "أرد على جميع الرسائل",
    "Theme Colors": "ألوان الموقع"
};

    const TYPED_STRINGS = {
        en: ["", "Data Analyst", "Data Scientist"],
        ar: ["", "محلل بيانات", "عالم بيانات"]
    };
    const PAGE_TITLE = { en: "Saif Hegazy", ar: "سيف حجازي" };
    const FORM_LANG_PARAM = "&hl=ar";
    const STORAGE_KEY = "portfolio-lang";
    const ARABIC_FONT_URL =
        "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap";

    const originals = new WeakMap();   // text node -> original English text
    let current = "en";

    function readSaved() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function save(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode etc. */ }
    }

    function loadArabicFont() {
        if (document.getElementById("arabic-font")) return;
        const link = document.createElement("link");
        link.id = "arabic-font";
        link.rel = "stylesheet";
        link.href = ARABIC_FONT_URL;
        document.head.appendChild(link);
    }

    function shouldSkip(node) {
        const p = node.parentElement;
        if (!p) return true;
        // never touch scripts/styles, the typing animation, or its cursor
        if (p.closest("script, style, noscript, iframe, .typing, .typed-cursor")) return true;
        return false;
    }

    function walkTextNodes(root, fn) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(fn);
    }

    function translateTextNodes(toArabic) {
        walkTextNodes(document.body, function (node) {
            if (shouldSkip(node)) return;
            if (toArabic) {
                const raw = originals.has(node) ? originals.get(node) : node.nodeValue;
                const key = raw.trim();
                if (!key || !Object.prototype.hasOwnProperty.call(AR, key)) return;
                if (!originals.has(node)) originals.set(node, raw);
                const lead = raw.match(/^\s*/)[0];
                const trail = raw.match(/\s*$/)[0];
                node.nodeValue = lead + AR[key] + trail;
            } else if (originals.has(node)) {
                node.nodeValue = originals.get(node);
                originals.delete(node);
            }
        });
    }

    function updateContactForm(toArabic) {
        const frame = document.querySelector("iframe.contact-form");
        if (!frame) return;
        if (!frame.dataset.srcEn) frame.dataset.srcEn = frame.getAttribute("src");
        const target = toArabic ? frame.dataset.srcEn + FORM_LANG_PARAM : frame.dataset.srcEn;
        if (frame.getAttribute("src") !== target) frame.setAttribute("src", target);
    }

    function updateButton(lang) {
        const btn = document.querySelector(".lang-toggle");
        if (!btn) return;
        const label = btn.querySelector(".lang-label");
        // the button shows the language you will switch TO
        if (label) label.textContent = lang === "ar" ? "EN" : "ع";
        btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
        btn.setAttribute("title", lang === "ar" ? "English" : "العربية");
    }

    function setLanguage(lang, persist) {
        if (lang !== "ar" && lang !== "en") lang = "en";
        const toArabic = lang === "ar";
        current = lang;

        if (toArabic) loadArabicFont();

        const html = document.documentElement;
        html.setAttribute("lang", lang);
        html.setAttribute("dir", toArabic ? "rtl" : "ltr");
        document.body.classList.toggle("rtl", toArabic);

        translateTextNodes(toArabic);
        updateContactForm(toArabic);
        document.title = PAGE_TITLE[lang];
        updateButton(lang);

        // restart the typing animation with the right language
        if (typeof window.startTyping === "function") window.startTyping(TYPED_STRINGS[lang]);

        if (persist) save(lang);
    }

    document.addEventListener("DOMContentLoaded", function () {
        const btn = document.querySelector(".lang-toggle");
        if (btn) {
            const toggle = function () { setLanguage(current === "ar" ? "en" : "ar", true); };
            btn.addEventListener("click", toggle);
            btn.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
            });
        }
        // ?lang=ar in the URL wins, otherwise use the saved choice
        let initial = readSaved();
        try {
            const q = new URLSearchParams(window.location.search).get("lang");
            if (q === "ar" || q === "en") initial = q;
        } catch (e) { /* ignore */ }
        if (initial === "ar") setLanguage("ar", false);
        else updateButton("en");
    });

    window.setSiteLanguage = setLanguage;
})();
