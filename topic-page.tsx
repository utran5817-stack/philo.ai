"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import AIChat from "./ai-chat"
import PhilosopherModal from "./philosopher-modal"

const topicData: Record<string, any> = {
  stoicism: {
    name: "CHỦ NGHĨA KHẮC KỶ",
    introduction: `Chủ nghĩa Khắc kỷ là một trường phái triết học cổ đại phát sinh tại Hy Lạp vào thế kỷ thứ 3 trước Công nguyên. Nó dạy rằng đức hạnh là điều duy nhất thực sự tốt, và chúng ta nên sống phù hợp với lý trí và tự nhiên. Những người theo chủ nghĩa Khắc kỷ tin rằng chúng ta không thể kiểm soát những sự kiện bên ngoài, nhưng chúng ta có thể kiểm soát phản ứng của mình.

Triết học này nhấn mạnh sự bình thản trước những biến cố, sự tự chủ, và sự sống đơn giản. Nó không phải là về sự khổ sở, mà là về việc tìm thấy sự tự do thực sự thông qua việc giải phóng bản thân khỏi những mong muốn không cần thiết.`,
    quote: '"Bạn không bị xáo trộn bởi những điều, mà bởi quan điểm của bạn về chúng." - Epictetus',
    philosophers: [
      {
        name: "Marcus Aurelius",
        role: "Hoàng đế La Mã",
        description:
          'Marcus Aurelius (121-180 SCN) là một trong những nhân vật hấp dẫn nhất lịch sử: một Hoàng đế La Mã toàn năng, người dành phần lớn thời gian trị vì của mình trên các chiến trường biên giới khắc nghiệt, nhưng lại viết nên một trong những tác phẩm nội tâm sâu sắc nhất từng được ghi lại. Ông là hiện thân sống của "vị vua triết gia" mà Plato hằng mơ ước. Di sản triết học của ông, cuốn "Suy Tưởng" (Meditations), không bao giờ được viết để xuất bản. Đó là một bộ nhật ký cá nhân, một cuộc tự đối thoại, một loạt các bài tập thực hành mà ông viết cho chính mình để giữ vững lý trí, sự bình thản và đức hạnh giữa sự hỗn loạn của chiến tranh, bệnh dịch, và những âm mưu chính trị tại Rome.',
        slug: "marcus-aurelius",
      },
      {
        name: "Seneca",
        role: "Nhà triết học La Mã",
        description:
          "Seneca (4 SCN - 65 SCN) là một nhà triết học Khắc kỷ nổi tiếng, người thầy của Hoàng đế Nero. Ông viết rất nhiều về đức hạnh, sự bình thản, và cách sống một cuộc đời có ý nghĩa. Mặc dù là một người giàu có và có quyền lực, Seneca luôn nhấn mạnh tầm quan trọng của sự đơn giản và sự tự chủ. Ông tin rằng chúng ta nên tập luyện tâm trí của mình để chịu đựng những khó khăn và không bị chi phối bởi những mong muốn vô độ.",
        slug: "seneca",
      },
      {
        name: "Epictetus",
        role: "Nhà triết học Hy Lạp",
        description:
          "Epictetus (50-135 SCN) là một nhà triết học Khắc kỷ nổi tiếng, người từng là nô lệ nhưng sau đó trở thành tự do. Ông dạy rằng chúng ta không thể kiểm soát những sự kiện bên ngoài, nhưng chúng ta có thể kiểm soát phản ứng của mình. Epictetus nhấn mạnh tầm quan trọng của sự tự chủ và sự bình thản. Ông tin rằng sự tự do thực sự đến từ việc chấp nhận những gì ta không thể kiểm soát và tập trung vào những gì ta có thể kiểm soát.",
        slug: "epictetus",
      },
    ],
  },
  epicureanism: {
    name: "CHỦ NGHĨA DÃ SỐNG",
    introduction: `Chủ nghĩa Dã sống thường bị hiểu lầm là sự theo đuổi những khoái lạc vô độ. Tuy nhiên, Epicurus thực sự dạy rằng cuộc sống tốt nhất là cuộc sống đơn giản, với những bạn bè tốt, những cuộc trò chuyện có ý nghĩa, và những khoái lạc tinh tế.

Epicurus tin rằng chúng ta nên tránh những mong muốn không cần thiết và những nỗi sợ hãi vô căn cứ. Ông ủng hộ sự sống khiêm tốn, tránh những bệnh tật của cơ thể và tâm trí, và tìm kiếm sự yên tĩnh và tự do khỏi nỗi sợ hãi.`,
    quote:
      '"Khi chúng ta nói rằng khoái lạc là mục tiêu, chúng ta có nghĩa là không phải những khoái lạc dâm dục..." - Epicurus',
    philosophers: [
      {
        name: "Epicurus",
        role: "Nhà triết học Hy Lạp",
        description:
          "Epicurus (341-270 SCN) là người sáng lập trường phái Chủ nghĩa Dã sống. Ông thường bị hiểu lầm là người ủng hộ sự sống xa hoa, nhưng thực tế ông dạy rằng cuộc sống tốt nhất là cuộc sống đơn giản. Epicurus tin rằng chúng ta nên tránh những mong muốn không cần thiết và những nỗi sợ hãi vô căn cứ. Ông ủng hộ sự sống khiêm tốn, tránh những bệnh tật của cơ thể và tâm trí, và tìm kiếm sự yên tĩnh và tự do khỏi nỗi sợ hãi.",
        slug: "epicurus",
      },
      {
        name: "Lucretius",
        role: "Nhà thơ La Mã",
        description:
          "Lucretius (94-55 SCN) là một nhà thơ La Mã nổi tiếng, người truyền bá tư tưởng của Epicurus thông qua tác phẩm 'Về Bản Chất Vũ Trụ' (De Rerum Natura). Ông viết về vật lý, triết học, và đạo đức theo quan điểm của Epicurus. Lucretius tin rằng hiểu biết về tự nhiên sẽ giúp chúng ta vượt qua nỗi sợ hãi và tìm thấy sự yên tĩnh. Ông nhấn mạnh tầm quan trọng của tình bạn, gia đình, và những khoái lạc tinh tế.",
        slug: "lucretius",
      },
    ],
  },
  platonism: {
    name: "CHỦ NGHĨA PLATON",
    introduction: `Chủ nghĩa Platon là một trong những trường phái triết học có ảnh hưởng nhất trong lịch sử. Plato tin rằng thế giới vật chất mà chúng ta nhìn thấy chỉ là một bóng của thế giới thực sự - thế giới của những ý tưởng hoặc hình thức hoàn hảo.

Theo Plato, những ý tưởng này là vĩnh cửu, không thay đổi, và hoàn hảo. Mục tiêu của triết học là thoát khỏi hang động của sự vô minh và nhìn thấy ánh sáng của sự thật.`,
    quote: '"Giáo dục không phải là việc đổ kiến thức vào một cái bình trống, mà là thắp sáng một ngọn lửa." - Plato',
    philosophers: [
      {
        name: "Plato",
        role: "Nhà triết học Hy Lạp",
        description:
          "Plato (428-348 SCN) là một trong những nhà triết học vĩ đại nhất trong lịch sử. Ông là học trò của Socrates và người thầy của Aristotle. Plato tin rằng thế giới vật chất mà chúng ta nhìn thấy chỉ là một bóng của thế giới thực sự - thế giới của những ý tưởng hoặc hình thức hoàn hảo. Ông sáng lập Học viện tại Athens, nơi ông dạy triết học, toán học, và khoa học. Tác phẩm của ông, đặc biệt là 'Cộng Hòa', vẫn có ảnh hưởng lớn đến triết học ngày nay.",
        slug: "plato",
      },
      {
        name: "Plotinus",
        role: "Nhà triết học Hy Lạp-La Mã",
        description:
          "Plotinus (204-270 SCN) là một nhà triết học Hy Lạp-La Mã nổi tiếng, người phát triển Tân Platon. Ông tin rằng thực tại là một hệ thống phân cấp, với Một (The One) ở đỉnh, từ đó mọi thứ khác phát sinh. Plotinus dạy rằng mục tiêu của cuộc sống là trở lại với Một thông qua thiền định và sự tự chủ. Ông nhấn mạnh tầm quan trọng của sự tinh khiết, sự bình thản, và sự hiểu biết về bản chất thực sự của thực tại.",
        slug: "plotinus",
      },
    ],
  },
  aristotelian: {
    name: "CHỦ NGHĨA ARISTOTLE",
    introduction: `Chủ nghĩa Aristotle là một trường phái triết học tập trung vào quan sát thế giới tự nhiên và sử dụng lý trí để hiểu nó. Aristotle tin rằng đức hạnh là một thói quen, và chúng ta đạt được nó thông qua thực hành.

Ông dạy rằng hạnh phúc (eudaimonia) đạt được thông qua việc phát triển những đức tính tốt và sống một cuộc sống cân bằng. Aristotle nhấn mạnh tầm quan trọng của lý trí, bạn bè, và cộng đồng.`,
    quote:
      '"Chúng ta là những gì chúng ta lặp đi lặp lại. Do đó, sự xuất sắc không phải là một hành động, mà là một thói quen." - Aristotle',
    philosophers: [
      {
        name: "Aristotle",
        role: "Nhà triết học Hy Lạp",
        description:
          "Aristotle (384-322 SCN) là một trong những nhà triết học vĩ đại nhất trong lịch sử. Ông là học trò của Plato và người thầy của Alexander Đại Đế. Aristotle tin rằng chúng ta nên quan sát thế giới tự nhiên và sử dụng lý trí để hiểu nó. Ông dạy rằng hạnh phúc (eudaimonia) đạt được thông qua việc phát triển những đức tính tốt và sống một cuộc sống cân bằng. Ông sáng lập Lyceum tại Athens, nơi ông dạy triết học, khoa học, và chính trị.",
        slug: "aristotle",
      },
      {
        name: "Thomas Aquinas",
        role: "Nhà thần học Trung Cổ",
        description:
          "Thomas Aquinas (1225-1274) là một nhà thần học Trung Cổ nổi tiếng, người kết hợp triết học của Aristotle với Kitô giáo. Ông tin rằng lý trí và đức tin không mâu thuẫn với nhau, mà bổ sung cho nhau. Aquinas dạy rằng chúng ta có thể sử dụng lý trí để hiểu Thiên Chúa và những điều thánh thiêng. Ông viết rất nhiều về đạo đức, chính trị, và thần học, và tác phẩm của ông vẫn có ảnh hưởng lớn đến Kitô giáo ngày nay.",
        slug: "thomas-aquinas",
      },
    ],
  },
  cynicism: {
    name: "CHỦ NGHĨA KHOA HỌC",
    introduction: `Chủ nghĩa Khoa học là một trường phái triết học cổ đại nhấn mạnh sự sống đơn giản, sự tự do, và sự độc lập. Những người theo chủ nghĩa Khoa học tin rằng chúng ta nên thoát khỏi những quy ước xã hội và sống theo bản chất của mình.

Diogenes, người sáng lập trường phái, nổi tiếng vì sự sống khắc khổ và những hành động gây sốc nhằm thách thức những quy ước xã hội. Ông tin rằng sự tự do thực sự đến từ việc từ bỏ những mong muốn không cần thiết.`,
    quote: '"Tôi không cần bất cứ điều gì ngoài những gì tự nhiên cung cấp." - Diogenes',
    philosophers: [
      {
        name: "Diogenes",
        role: "Nhà triết học Hy Lạp",
        description:
          "Diogenes (412-323 SCN) là người sáng lập trường phái Chủ nghĩa Khoa học. Ông nổi tiếng vì sự sống khắc khổ và những hành động gây sốc nhằm thách thức những quy ước xã hội. Diogenes tin rằng chúng ta nên thoát khỏi những mong muốn không cần thiết và sống một cuộc sống đơn giản, tự do. Ông sống trong một thùng rác và từ chối những tài sản vật chất. Diogenes dạy rằng sự tự do thực sự đến từ việc từ bỏ những mong muốn không cần thiết.",
        slug: "diogenes",
      },
      {
        name: "Crates",
        role: "Nhà triết học Hy Lạp",
        description:
          "Crates (365-285 SCN) là một nhà triết học Hy Lạp nổi tiếng, người theo dõi Diogenes. Ông tin rằng chúng ta nên sống một cuộc sống đơn giản, tự do khỏi những mong muốn không cần thiết. Crates từ bỏ tài sản của mình và sống như một người khiêm tốn. Ông dạy rằng sự tự do thực sự đến từ việc giải phóng bản thân khỏi những mong muốn vô độ. Crates nổi tiếng vì sự hài hước và những câu nói thông minh của ông.",
        slug: "crates",
      },
    ],
  },
  skepticism: {
    name: "CHỦ NGHĨA HOÀI NGHI",
    introduction: `Chủ nghĩa Hoài nghi là một trường phái triết học cổ đại nhấn mạnh tầm quan trọng của nghi vấn và sự cẩn thận trong việc đưa ra kết luận. Những người theo chủ nghĩa Hoài nghi tin rằng chúng ta không thể biết chắc chắn về bất cứ điều gì.

Pyrrho, người sáng lập trường phái, dạy rằng chúng ta nên tạm ngừng phán xét (epoché) về những vấn đề không thể quyết định được. Điều này dẫn đến sự yên tĩnh (ataraxia) và hạnh phúc.`,
    quote: '"Không có gì là chắc chắn, thậm chí cả sự không chắc chắn này." - Sextus Empiricus',
    philosophers: [
      {
        name: "Pyrrho",
        role: "Nhà triết học Hy Lạp",
        description:
          "Pyrrho (365-275 SCN) là người sáng lập trường phái Chủ nghĩa Hoài nghi. Ông dạy rằng chúng ta không thể biết chắc chắn về bất cứ điều gì, và chúng ta nên tạm ngừng phán xét (epoché) về những vấn đề không thể quyết định được. Pyrrho tin rằng điều này dẫn đến sự yên tĩnh (ataraxia) và hạnh phúc. Ông du hành khắp thế giới, bao gồm cả Ấn Độ, để tìm hiểu về những triết học khác nhau.",
        slug: "pyrrho",
      },
      {
        name: "Sextus Empiricus",
        role: "Nhà triết học Hy Lạp-La Mã",
        description:
          "Sextus Empiricus (160-210 SCN) là một nhà triết học Hy Lạp-La Mã nổi tiếng, người phát triển chủ nghĩa Hoài nghi. Ông viết rất nhiều về logic, triết học, và y học. Sextus Empiricus dạy rằng chúng ta nên nghi vấn tất cả những gì chúng ta tin tưởng, bao gồm cả những gì chúng ta cảm thấy. Ông tin rằng sự yên tĩnh (ataraxia) đạt được thông qua việc tạm ngừng phán xét về những vấn đề không thể quyết định được.",
        slug: "sextus-empiricus",
      },
    ],
  },
  rationalism: {
    name: "CHỦ NGHĨA DUY LÝ",
    introduction: `Chủ nghĩa Duy lý là một trường phái triết học nền tảng trong Nhận thức luận (Tri thức luận), khẳng định rằng lý trí (reason) là nguồn gốc chính yếu và là công cụ kiểm chứng cuối cùng của tri thức. Các nhà duy lý cho rằng thực tại có một cấu trúc logic, hợp lý mà trí tuệ con người có thể nắm bắt trực tiếp, độc lập với kinh nghiệm giác quan.

Họ thường tin rằng con người được sinh ra với một số "ý niệm bẩm sinh" (innate ideas) – những sự thật cơ bản về thực tại, logic, hoặc đạo đức mà không cần học hỏi từ thế giới bên ngoài. Toán học là hình mẫu lý tưởng của tri thức đối với các nhà duy lý, bởi nó là một hệ thống hoàn toàn dựa trên suy luận logic từ các tiên đề cơ bản, mang lại sự chắc chắn tuyệt đối mà các giác quan không thể cung cấp.`,
    quote: '"Tôi tư duy, vậy tôi tồn tại." - René Descartes',
    philosophers: [
      {
        name: "René Descartes",
        role: "Nhà triết học Pháp",
        description:
          "René Descartes (1596-1650) được coi là cha đẻ của triết học hiện đại. Ông phát triển phương pháp hoài nghi (methodic doubt) để tìm kiếm một nền tảng tri thức chắc chắn. Câu nói bất hủ 'Cogito, ergo sum' ('Tôi tư duy, vậy tôi tồn tại') đã trở thành điểm tựa vững chắc đầu tiên của ông. Descartes phân chia thực tại thành hai bản thể riêng biệt: 'bản thể tư duy' (res cogitans - tâm trí) và 'bản thể quảng tính' (res extensa - vật chất).",
        slug: "descartes",
      },
      {
        name: "Baruch Spinoza",
        role: "Nhà triết học Hà Lan",
        description:
          "Baruch Spinoza (1632-1677) đã đưa Chủ nghĩa Duy lý đến một tầm cao mới, logic và chặt chẽ hơn. Ông không chấp nhận sự phân chia tâm trí-vật chất của Descartes. Thay vào đó, Spinoza lập luận rằng chỉ có một bản thể duy nhất (Substance) tồn tại, và bản thể đó là tất cả mọi thứ: đó vừa là Thượng Đế (God), vừa là Tự Nhiên (Nature). Trong tác phẩm 'Đạo đức học' (Ethics), Spinoza trình bày hệ thống triết học của mình theo một cấu trúc hình học nghiêm ngặt.",
        slug: "spinoza",
      },
      {
        name: "Gottfried Wilhelm Leibniz",
        role: "Nhà triết học Đức",
        description:
          "Gottfried Wilhelm Leibniz (1646-1716) là một bộ óc thiên tài, có đóng góp lớn cho cả toán học và triết học. Ông cố gắng dung hòa tư tưởng của Descartes và Spinoza với đức tin Cơ Đốc giáo. Leibniz giới thiệu khái niệm 'đơn tử' (monad) - những 'nguyên tử' tinh thần, không có quảng tính, không tương tác với nhau. Ông nổi tiếng với 'Nguyên lý Lý do Đầy đủ' (Principle of Sufficient Reason) - khẳng định rằng mọi sự thật, mọi sự kiện đều phải có một lý do đầy đủ giải thích.",
        slug: "leibniz",
      },
    ],
  },
  empiricism: {
    name: "CHỦ NGHĨA KINH NGHIỆM",
    introduction: `Chủ nghĩa Kinh nghiệm là trường phái nhận thức luận đối lập trực tiếp với Chủ nghĩa Duy lý. Nó khẳng định rằng kinh nghiệm giác quan (sensory experience) là nguồn gốc và nền tảng của mọi tri thức.

Các nhà kinh nghiệm chủ nghĩa phủ nhận sự tồn tại của "ý niệm bẩm sinh". Thay vào đó, họ đề xuất mô hình "Tabula Rasa" (tờ giấy trắng) – cho rằng tâm trí con người khi sinh ra trống rỗng, và toàn bộ nội dung của nó được lấp đầy dần qua quá trình tương tác với thế giới bên ngoài thông qua năm giác quan. Trường phái này đặc biệt phát triển mạnh mẽ ở Anh quốc vào thế kỷ 17 và 18, và trở thành nền tảng triết học cho phương pháp khoa học thực nghiệm.`,
    quote: '"Không có gì trong trí tuệ mà trước đó không có trong giác quan." - John Locke',
    philosophers: [
      {
        name: "John Locke",
        role: "Nhà triết học Anh",
        description:
          "John Locke (1632-1704) là người đầu tiên hệ thống hóa Chủ nghĩa Kinh nghiệm một cách toàn diện. Trong tác phẩm 'Một luận văn về sự hiểu biết của con người', ông tấn công trực diện vào khái niệm 'ý niệm bẩm sinh' của Descartes. Locke cho rằng tâm trí giống như một 'tờ giấy trắng' (Tabula Rasa). Mọi tri thức đến từ hai nguồn: cảm giác (sensation) và phản tư (reflection). Ông phân biệt 'ý niệm đơn giản' và 'ý niệm phức hợp', cũng như 'phẩm chất sơ cấp' và 'phẩm chất thứ cấp'.",
        slug: "locke",
      },
      {
        name: "George Berkeley",
        role: "Nhà triết học Ireland",
        description:
          "George Berkeley (1685-1753), một giám mục người Ireland, đã đẩy lập luận của Locke đến một kết luận duy tâm triệt để. Berkeley đồng ý rằng mọi tri thức đến từ giác quan, nhưng ông đặt câu hỏi: Nếu chúng ta chỉ biết đến các 'ý niệm' (ideas) trong tâm trí, làm thế nào Locke có thể khẳng định sự tồn tại của 'vật chất' khách quan? Berkeley lập luận rằng cả phẩm chất sơ cấp lẫn thứ cấp đều chỉ là các ý niệm trong tâm trí. Ông đi đến kết luận táo bạo: 'Esse est percipi' ('Tồn tại là được tri giác').",
        slug: "berkeley",
      },
      {
        name: "David Hume",
        role: "Nhà triết học Scotland",
        description:
          "David Hume (1711-1776) là nhà kinh nghiệm chủ nghĩa triệt để và hoài nghi nhất. Ông áp dụng các nguyên tắc của Locke một cách nghiêm ngặt và đi đến những kết luận đáng kinh ngạc. Hume phân chia mọi nhận thức thành 'ấn tượng' (impressions) và 'ý niệm' (ideas). Ông tấn công vào hai khái niệm nền tảng: nhân quả (causality) và bản ngã (self). Hume lập luận rằng chúng ta không bao giờ trải nghiệm được 'sự kết nối tất yếu' giữa nguyên nhân và kết quả, chỉ thấy chúng xảy ra liên tiếp.",
        slug: "hume",
      },
    ],
  },
  postmodernism: {
    name: "CHỦ NGHĨA HẬU HIỆN ĐẠI",
    introduction: `Chủ nghĩa Hậu Hiện Đại không phải là một học thuyết hay một hệ thống triết học thống nhất, mà là một trào lưu tư tưởng, một "tâm trạng" hoài nghi và phê phán sâu sắc, nổi lên vào nửa sau thế kỷ 20. Nó là một sự phản ứng (và ở một mức độ nào đó, là sự kế thừa) của Chủ nghĩa Hiện đại, nhưng với một thái độ hoài nghi triệt để đối với các nền tảng của triết học và văn hóa phương Tây.

Nếu Chủ nghĩa Hiện đại vẫn tin tưởng vào lý trí, tiến bộ, và khả năng tìm ra "sự thật" khách quan, thì Chủ nghĩa Hậu Hiện Đại tuyên bố rằng những niềm tin đó đã sụp đổ. Nó tấn công vào các "cặp đối lập" nhị nguyên (binary oppositions) của tư duy phương Tây và cho rằng các cấu trúc này mang tính áp bức.`,
    quote: '"Không có gì bên ngoài văn bản." - Jacques Derrida',
    philosophers: [
      {
        name: "Jean-François Lyotard",
        role: "Nhà triết học Pháp",
        description:
          "Jean-François Lyotard (1924-1998) là một trong những nhà triết học Hậu Hiện Đại quan trọng nhất. Ông nổi tiếng với định nghĩa về Hậu Hiện Đại như là 'hoài nghi các đại tự sự' (incredulity toward metanarratives). Lyotard cho rằng những 'đại tự sự' lớn (như câu chuyện về sự tiến bộ của Khoa học, sự giải phóng của con người) đã mất đi tính khả tín. Chúng không phải là những sự thật khách quan, mà là những cấu trúc tư tưởng được tạo ra để phục vụ cho các mục đích quyền lực. Thay vào đó, Hậu Hiện Đại đề cao các 'tự sự nhỏ' (local narratives) – những câu chuyện riêng lẻ, mang tính địa phương, cá nhân.",
        slug: "lyotard",
      },
      {
        name: "Michel Foucault",
        role: "Nhà triết học Pháp",
        description:
          "Michel Foucault (1926-1984) là một trong những tiếng nói ảnh hưởng nhất của Hậu Hiện Đại. Foucault lập luận rằng tri thức không bao giờ 'ngây thơ' hay 'trung lập'. Tri thức và quyền lực luôn tồn tại song song và củng cố lẫn nhau (Quyền Lực/Tri Thức). Không phải là 'quyền lực' cấm đoán 'tri thức', mà chính 'tri thức' tạo ra 'quyền lực'. Ví dụ, các ngành 'khoa học nhân văn' (như tâm thần học, tội phạm học) không chỉ 'khám phá' ra sự thật về 'người điên' hay 'tội phạm', mà chúng còn tạo ra chính các phạm trù đó.",
        slug: "foucault",
      },
      {
        name: "Jacques Derrida",
        role: "Nhà triết học Pháp",
        description:
          "Jacques Derrida (1930-2004) là một triết gia quan trọng khác, tập trung vào ngôn ngữ. Ông cho rằng toàn bộ triết học phương Tây dựa trên 'Siêu hình học của sự Hiện diện' (metaphysics of presence) – niềm tin rằng chúng ta có thể tiếp cận trực tiếp với 'sự thật' hoặc 'ý nghĩa' thuần túy. Derrida, thông qua phương pháp 'giải cấu trúc' (deconstruction), cho thấy rằng ngôn ngữ không phải là một công cụ trong suốt để phản ánh thực tại. Ý nghĩa của một từ luôn bị 'trì hoãn' (différance) và phụ thuộc vào vô số các từ khác.",
        slug: "derrida",
      },
    ],
  },
  nihilism: {
    name: "CHỦ NGHĨA HƯ VÔ",
    introduction: `Chủ Nghĩa Hư Vô (Nihilism), bắt nguồn từ tiếng Latinh "nihil" có nghĩa là "không có gì", là một trường phái triết học hoặc một quan điểm cho rằng cuộc sống không có ý nghĩa, mục đích, hoặc giá trị nội tại khách quan. Đây là một trong những tư tưởng triết học mang tính thách thức và thường bị hiểu lầm nhất.

Chủ nghĩa Hư Vô không phải là một hệ thống có tổ chức mà bạn có thể "tham gia". Thay vào đó, nó là một kết luận triết học, thường là một kết luận bi quan, xuất phát từ sự hoài nghi triệt để đối với các hệ thống giá trị đã được thiết lập. Nó đặt câu hỏi: Nếu Thượng Đế đã chết (hoặc không bao giờ tồn tại), nếu khoa học không thể cho ta biết tại sao ta ở đây, và nếu mọi nền đạo đức đều chỉ là sáng tạo của xã hội, vậy thì cơ sở cho bất kỳ giá trị nào là gì?

Chủ nghĩa Hư Vô có thể được chia thành nhiều dạng khác nhau, tấn công vào các khía cạnh khác nhau của sự tồn tại. Hư Vô Nhận Thức Luận (Epistemological Nihilism) là hình thức hoài nghi triệt để nhất về tri thức, cho rằng không có tri thức nào là chắc chắn. Hư Vô Đạo Đức (Moral Nihilism) khẳng định rằng không có hành động nào là "đúng" hay "sai" về mặt đạo đức một cách khách quan. Hư Vô Hiện Sinh (Existential Nihilism) cho rằng cuộc sống con người không có ý nghĩa hay mục đích nội tại.

Friedrich Nietzsche, mặc dù không phải là một nhà hư vô chủ nghĩa theo nghĩa đen, là người chẩn đoán "căn bệnh" Hư Vô của thời hiện đại một cách sâu sắc nhất. Câu nói nổi tiếng "Chúa đã chết" không phải là một lời reo hò ăn mừng, mà là một lời cảnh báo bi thảm về sự sụp đổ của nền tảng giá trị phương Tây. Nietzsche cảnh báo rằng khi nền tảng này sụp đổ, nhân loại sẽ rơi vào một khoảng trống đáng sợ: Chủ nghĩa Hư Vô.

Tuy nhiên, Nietzsche không dừng lại ở việc chẩn đoán. Ông coi Hư Vô là một "giai đoạn chuyển tiếp" nguy hiểm mà con người phải vượt qua. Giải pháp của ông là "sự tái định giá mọi giá trị" - con người không nên tìm kiếm ý nghĩa bên ngoài, mà phải tạo ra ý nghĩa cho chính mình. Ông giới thiệu hình mẫu "Siêu nhân" (Übermensch): một cá nhân đủ mạnh mẽ để đối mặt với sự thật rằng vũ trụ là vô nghĩa, tự mình tạo ra hệ thống giá trị của riêng mình, và "yêu lấy định mệnh" của mình (Amor Fati).

Do đó, Chủ nghĩa Hư Vô thường được coi là "điểm 0" của triết học. Nó là vực thẳm mà nhiều tư tưởng (như Chủ nghĩa Hiện sinh của Sartre và Camus) phải đối mặt và cố gắng tìm cách vượt qua, bằng cách thừa nhận sự vô nghĩa của vũ trụ nhưng vẫn khẳng định giá trị của tự do, lựa chọn và trải nghiệm của con người.`,
    quote: '"Chúa đã chết. Và chúng ta đã giết chết Ngài." - Friedrich Nietzsche',
    philosophers: [
      {
        name: "Friedrich Nietzsche",
        role: "Nhà triết học Đức",
        description:
          "Friedrich Nietzsche (1844-1900) là một trong những nhà triết học có ảnh hưởng nhất của thế kỷ 19. Mặc dù không phải là một nhà hư vô chủ nghĩa theo nghĩa đen, ông là người chẩn đoán 'căn bệnh' Hư Vô của thời hiện đại một cách sâu sắc nhất. Câu nói nổi tiếng 'Chúa đã chết' không phải là một lời reo hò ăn mừng, mà là một lời cảnh báo bi thảm. Nietzsche cảnh báo rằng khi nền tảng giá trị phương Tây sụp đổ, nhân loại sẽ rơi vào Chủ nghĩa Hư Vô. Tuy nhiên, ông không dừng lại ở việc chẩn đoán, mà đề xuất giải pháp: 'sự tái định giá mọi giá trị' và hình mẫu 'Siêu nhân'.",
        slug: "nietzsche",
      },
      {
        name: "Ivan Turgenev",
        role: "Nhà văn Nga",
        description:
          "Ivan Turgenev (1818-1883) là một nhà văn Nga nổi tiếng, người đã phổ biến khái niệm 'Nihilism' thông qua tiểu thuyết 'Cha Và Con' (Fathers and Sons). Nhân vật Bazarov trong tiểu thuyết này là một hình mẫu của nhà hư vô chủ nghĩa - một thanh niên thông minh, độc lập, người phủ nhận tất cả các giá trị truyền thống và chỉ tin tưởng vào khoa học và lý trí. Turgenev đã giúp làm cho Nihilism trở thành một phong trào tư tưởng thực sự ở Nga, ảnh hưởng đến nhiều thế hệ thanh niên.",
        slug: "turgenev",
      },
      {
        name: "Emil Cioran",
        role: "Nhà triết học Romania",
        description:
          "Emil Cioran (1911-1995) là một nhà triết học Romania nổi tiếng, người viết về tuyệt vọng, vô nghĩa, và sự vô vọng của cuộc sống. Ông là một nhà hư vô chủ nghĩa hiện sinh, người tin rằng cuộc sống không có ý nghĩa nội tại và chúng ta đều bị 'lưu đày' vào sự tồn tại. Tác phẩm của ông, như 'Sự Phá Vỡ Của Tôi' (The Trouble with Being Born), là những bản tuyên ngôn của tuyệt vọng triết học. Tuy nhiên, Cioran không rơi vào sự tự tử hay sự tuyệt vọng hoàn toàn, mà tìm thấy một loại hạnh phúc trong sự chấp nhận vô điều kiện của sự vô nghĩa.",
        slug: "cioran",
      },
    ],
  },
}

export default function TopicPage({
  topicId,
  onBack,
}: {
  topicId: string
  onBack: () => void
}) {
  const [showChat, setShowChat] = useState(false)
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<any>(null)
  const data = topicData[topicId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [topicId])

  if (!data) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-playfair)" }}>
            {data.name}
          </h1>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-accent mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Giới Thiệu Tổng Quan
          </h2>
          <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-wrap">{data.introduction}</p>
        </motion.section>

        {/* Quote */}
        <motion.section
          className="mb-12 p-8 bg-card border-l-4 border-accent rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl text-accent italic" style={{ fontFamily: "var(--font-playfair)" }}>
            {data.quote}
          </p>
        </motion.section>

        {/* Philosophers */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-accent mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Các Triết Gia Tiêu Biểu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.philosophers.map((philosopher: any, index: number) => (
              <motion.div
                key={index}
                onClick={() => setSelectedPhilosopher(philosopher)}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-accent mb-2">{philosopher.name}</h3>
                <p className="text-primary text-sm mb-2">{philosopher.role}</p>
                <p className="text-foreground/70">{philosopher.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Chat Gateway */}
        <motion.section
          className="mb-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-accent mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Cổng Đối Thoại
          </h2>
          <p className="text-foreground/80 mb-6">Bạn đã hiểu sơ lược. Giờ hãy hỏi sâu hơn.</p>
          {!showChat && (
            <button
              onClick={() => setShowChat(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Bắt Đầu Đối Thoại
            </button>
          )}
        </motion.section>

        {/* AI Chat */}
        <AnimatePresence>
          {showChat && <AIChat topicId={topicId} topicName={data.name} onClose={() => setShowChat(false)} />}
        </AnimatePresence>
      </div>

      {/* Philosopher Modal */}
      <AnimatePresence>
        {selectedPhilosopher && (
          <PhilosopherModal
            philosopher={selectedPhilosopher}
            topicId={topicId}
            onClose={() => setSelectedPhilosopher(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
