"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const philosopherContent: Record<string, Record<string, any>> = {
  stoicism: {
    "marcus-aurelius": {
      name: "Marcus Aurelius: Vị Vua Triết Gia",
      content: `Marcus Aurelius (121 SCN – 180 SCN) là một trong những nhân vật hấp dẫn nhất lịch sử: một Hoàng đế La Mã toàn năng, người dành phần lớn thời gian trị vì của mình trên các chiến trường biên giới khắc nghiệt, nhưng lại viết nên một trong những tác phẩm nội tâm sâu sắc nhất từng được ghi lại. Ông là hiện thân sống của "vị vua triết gia" mà Plato hằng mơ ước.

Di sản triết học của ông, cuốn "Suy Tưởng" (Meditations), không bao giờ được viết để xuất bản. Đó là một bộ nhật ký cá nhân, một cuộc tự đối thoại, một loạt các bài tập thực hành mà ông viết cho chính mình để giữ vững lý trí, sự bình thản và đức hạnh giữa sự hỗn loạn của chiến tranh, bệnh dịch, và những âm mưu chính trị tại Rome. Ông là một trong những trụ cột cuối cùng và vĩ đại nhất của Chủ nghĩa Khắc kỷ (Stoicism).

Tư tưởng của ông không phải là học thuyết trừu tượng, mà là một bộ công cụ thực tiễn để sống một cuộc đời tốt đẹp.

## Phân Định Kiểm Soát (The Dichotomy of Control)

Cốt lõi của triết học Khắc kỷ, và là điều Marcus Aurelius liên tục tự nhắc nhở mình, là sự phân biệt rõ ràng giữa những gì ta có thể kiểm soát và những gì ta không thể kiểm soát.

Không thể kiểm soát: Sự kiện bên ngoài, hành động của người khác, danh tiếng, sức khỏe, tài sản, và cái chết.

Có thể kiểm soát: Chỉ duy nhất một thứ: phản ứng nội tâm của chúng ta. Cụ thể là các phán xét, suy nghĩ, và hành động (ý chí) của chính mình.

Nguồn gốc của mọi đau khổ (tức giận, lo lắng, sợ hãi) là khi chúng ta mong muốn kiểm soát những thứ bên ngoài. Marcus Aurelius viết: "Nếu bạn đau khổ vì bất cứ điều gì bên ngoài, nỗi đau đó không phải do bản thân sự việc, mà là do sự phán xét của chính bạn về nó. Và bạn có quyền năng xóa bỏ sự phán xét đó ngay lập tức." Sự bình thản (ataraxia) chỉ đạt được khi ta tập trung toàn bộ năng lượng vào việc rèn giũa phản ứng của mình.

## Yêu Vận Mệnh (Amor Fati)

Bước tiếp theo của việc chấp nhận những gì ta không thể kiểm soát là yêu chúng. Marcus Aurelius tin vào "Logos" – một Lý trí Phổ quát, một trật tự thiêng liêng vận hành vũ trụ. Mọi thứ xảy ra, dù tốt hay xấu theo cách nhìn của con người, đều là một phần tất yếu và cần thiết của trật tự vĩ đại đó.

Vì vậy, thay vì chỉ "chịu đựng" nghịch cảnh, ông thực hành "Amor Fati" (Tình yêu Vận mệnh). Ông xem mọi trở ngại như một cơ hội để rèn luyện đức hạnh. Trong một câu nói nổi tiếng, ông viết: "Trở ngại cho hành động thúc đẩy hành động. Cái gì cản đường sẽ trở thành đường." (The impediment to action advances action. What stands in the way becomes the way.) Bệnh dịch, chiến tranh, sự phản bội... tất cả đều là "nguyên liệu thô" để ông thực hành lòng dũng cảm, sự kiên nhẫn, và lý trí.

## Trách Nhiệm Xã Hội (Sympatheia)

Là một hoàng đế, Marcus Aurelius ý thức sâu sắc về nghĩa vụ của mình. Ông không thực hành triết học để trốn chạy khỏi thế giới, mà để phục vụ thế giới tốt hơn. Ông tin rằng tất cả con người đều được kết nối với nhau như một phần của "Logos".

"Điều gì không tốt cho bầy ong, thì cũng không tốt cho con ong."

Ông liên tục tự vấn mình phải hành động vì "lợi ích chung" (common good). Mặc dù bản thân là một người hướng nội, yêu sách và sự yên tĩnh, ông đã dành phần lớn cuộc đời mình tại các tiền đồn quân sự bẩn thỉu vì đó là nghĩa vụ của ông với Rome. Lòng tốt, sự tha thứ, và công lý không phải là lựa chọn, mà là mệnh lệnh của lý trí.

## Ghi Nhớ Về Cái Chết (Memento Mori)

Marcus Aurelius bị ám ảnh bởi tính phù du của vạn vật. Ông liên tục nhắc nhở mình rằng ông sẽ chết, rằng những người ca ngợi ông sẽ chết, và cả Đế chế La Mã hùng mạnh rồi cũng sẽ tan rã.

"Hãy nghĩ về sự bao la của thời gian đã qua, và sự vô hạn của thời gian sắp tới. Trong đó, sự khác biệt giữa người sống ba ngày và người sống ba kiếp là gì?"

Mục đích của "Memento Mori" không phải là để trở nên bi quan, mà là để sống một cách khẩn trương và đúng đắn. Nếu cuộc đời là ngắn ngủi, thì không có thời gian cho sự nhỏ nhen, tức giận, hay theo đuổi danh vọng hão. Điều duy nhất quan trọng là hành động đức hạnh ngay trong giây phút hiện tại.

Di sản của Marcus Aurelius không nằm ở các cuộc chinh phạt, mà ở cuốn nhật ký mỏng ông để lại. Nó là minh chứng rằng triết học không phải là một trò chơi trí tuệ, mà là một cuộc chiến hàng ngày để trở thành một con người tốt hơn, lý trí hơn, và bình thản hơn, bất kể hoàn cảnh bên ngoài có tồi tệ đến đâu.`,
    },
    seneca: {
      name: "Seneca: Nhà Triết Học Của Sự Bình Thản",
      content: `Seneca (4 SCN - 65 SCN) là một trong những nhà triết học Khắc kỷ nổi tiếng nhất, người thầy của Hoàng đế Nero. Mặc dù sống trong một thế giới đầy quyền lực và cám dỗ, Seneca luôn nhấn mạnh tầm quan trọng của sự đơn giản, sự tự chủ, và sự bình thản.

Seneca viết rất nhiều về đức hạnh, sự bình thản, và cách sống một cuộc đời có ý nghĩa. Ông tin rằng chúng ta nên tập luyện tâm trí của mình để chịu đựng những khó khăn và không bị chi phối bởi những mong muốn vô độ. Mặc dù là một người giàu có và có quyền lực, Seneca luôn sống một cuộc sống tương đối đơn giản.

Một trong những đóng góp lớn nhất của Seneca là việc ông viết về sự quản lý thời gian. Ông tin rằng thời gian là tài sản quý giá nhất của chúng ta, và chúng ta nên sử dụng nó một cách khôn ngoan. Ông dạy rằng chúng ta nên tránh những hoạt động vô ích và tập trung vào những điều thực sự quan trọng.

Seneca cũng viết về sự tự do. Ông tin rằng sự tự do thực sự không phải là sự vắng mặt của những ràng buộc bên ngoài, mà là sự vắng mặt của những ràng buộc bên trong - những mong muốn vô độ, những nỗi sợ hãi, và những thành kiến. Ông dạy rằng chúng ta có thể đạt được sự tự do thực sự thông qua việc rèn luyện tâm trí của mình.

Cuộc sống của Seneca là một minh chứng cho những lời dạy của ông. Mặc dù bị Nero buộc phải tự sát, Seneca đã chết một cách bình thản, chứng minh rằng triết học Khắc kỷ không chỉ là những lời nói, mà là một cách sống thực sự.`,
    },
    epictetus: {
      name: "Epictetus: Từ Nô Lệ Đến Tự Do",
      content: `Epictetus (50-135 SCN) là một nhà triết học Khắc kỷ nổi tiếng, người từng là nô lệ nhưng sau đó trở thành tự do. Cuộc sống của ông là một minh chứng sống động cho những lời dạy của ông về sự tự do và sự bình thản.

Epictetus dạy rằng chúng ta không thể kiểm soát những sự kiện bên ngoài, nhưng chúng ta có thể kiểm soát phản ứng của mình. Ông nhấn mạnh tầm quan trọng của sự tự chủ và sự bình thản. Epictetus tin rằng sự tự do thực sự đến từ việc chấp nhận những gì ta không thể kiểm soát và tập trung vào những gì ta có thể kiểm soát.

Một trong những câu nói nổi tiếng của Epictetus là: "Không phải những sự kiện làm cho chúng ta bị xáo trộn, mà là quan điểm của chúng ta về những sự kiện đó." Điều này có nghĩa là chúng ta có quyền lực để chọn cách chúng ta phản ứng với những tình huống khó khăn.

Epictetus cũng dạy về sự tự do. Ông tin rằng ngay cả khi chúng ta là nô lệ, chúng ta vẫn có thể tự do. Sự tự do không phải là sự vắng mặt của những ràng buộc bên ngoài, mà là sự vắng mặt của những ràng buộc bên trong. Nếu chúng ta có thể kiểm soát phản ứng của mình, thì chúng ta là tự do, bất kể hoàn cảnh bên ngoài.

Cuộc sống của Epictetus là một minh chứng cho những lời dạy của ông. Mặc dù bị tra tấn bởi chủ nhân của mình, Epictetus vẫn giữ được sự bình thản và sự tự do nội tâm. Ông dạy rằng không ai có thể lấy đi sự tự do thực sự của chúng ta, vì nó nằm bên trong chúng ta.`,
    },
  },
  epicureanism: {
    epicurus: {
      name: "Epicurus: Triết Gia Của Sự Yên Tĩnh",
      content: `Epicurus (341-270 SCN) là người sáng lập trường phái Chủ nghĩa Dã sống. Ông thường bị hiểu lầm là người ủng hộ sự sống xa hoa, nhưng thực tế ông dạy rằng cuộc sống tốt nhất là cuộc sống đơn giản.

Epicurus tin rằng chúng ta nên tránh những mong muốn không cần thiết và những nỗi sợ hãi vô căn cứ. Ông ủng hộ sự sống khiêm tốn, tránh những bệnh tật của cơ thể và tâm trí, và tìm kiếm sự yên tĩnh và tự do khỏi nỗi sợ hãi.

Epicurus phân loại những mong muốn thành ba loại: những mong muốn tự nhiên và cần thiết (như ăn, uống, ngủ), những mong muốn tự nhiên nhưng không cần thiết (như những khoái lạc xa hoa), và những mong muốn không tự nhiên và không cần thiết (như danh vọng, quyền lực).

Ông dạy rằng chúng ta nên tập trung vào những mong muốn tự nhiên và cần thiết, vì chúng là những gì thực sự cần thiết cho hạnh phúc. Những mong muốn khác chỉ dẫn đến sự bất mãn và đau khổ.

Epicurus cũng nhấn mạnh tầm quan trọng của tình bạn. Ông tin rằng tình bạn là một trong những khoái lạc lớn nhất của cuộc sống. Ông sống với một nhóm bạn bè, và họ chia sẻ những bữa ăn đơn giản và những cuộc trò chuyện có ý nghĩa.

Mặc dù Epicurus dạy rằng chúng ta nên tránh những mong muốn không cần thiết, ông không dạy rằng chúng ta nên sống một cuộc sống khắc khổ. Thay vào đó, ông dạy rằng chúng ta nên tìm kiếm những khoái lạc tinh tế, như những cuộc trò chuyện tốt, những bạn bè tốt, và sự yên tĩnh.`,
    },
    lucretius: {
      name: "Lucretius: Nhà Thơ Của Triết Học",
      content: `Lucretius (94-55 SCN) là một nhà thơ La Mã nổi tiếng, người truyền bá tư tưởng của Epicurus thông qua tác phẩm "Về Bản Chất Vũ Trụ" (De Rerum Natura). Ông viết về vật lý, triết học, và đạo đức theo quan điểm của Epicurus.

Lucretius tin rằng hiểu biết về tự nhiên sẽ giúp chúng ta vượt qua nỗi sợ hãi và tìm thấy sự yên tĩnh. Ông nhấn mạnh tầm quan trọng của tình bạn, gia đình, và những khoái lạc tinh tế.

Tác phẩm của Lucretius là một trong những tác phẩm triết học quan trọng nhất của thời đại. Ông viết về nguyên tử, vũ trụ, và bản chất của thực tại. Ông cũng viết về cách sống một cuộc đời tốt đẹp, theo quan điểm của Epicurus.

Lucretius dạy rằng chúng ta nên tránh những nỗi sợ hãi vô căn cứ, đặc biệt là nỗi sợ hãi về các vị thần và cái chết. Ông tin rằng hiểu biết về tự nhiên sẽ giúp chúng ta nhận ra rằng những nỗi sợ hãi này là không có cơ sở.

Lucretius cũng nhấn mạnh tầm quan trọng của sự yên tĩnh. Ông tin rằng sự yên tĩnh là mục tiêu cuối cùng của cuộc sống. Ông dạy rằng chúng ta nên tránh những hoạt động vô ích và tập trung vào những điều thực sự quan trọng.`,
    },
  },
  platonism: {
    plato: {
      name: "Plato: Nhà Triết Học Của Những Ý Tưởng",
      content: `Plato (428-348 SCN) là một trong những nhà triết học vĩ đại nhất trong lịch sử. Ông là học trò của Socrates và người thầy của Aristotle. Plato tin rằng thế giới vật chất mà chúng ta nhìn thấy chỉ là một bóng của thế giới thực sự - thế giới của những ý tưởng hoặc hình thức hoàn hảo.

Plato sáng lập Học viện tại Athens, nơi ông dạy triết học, toán học, và khoa học. Tác phẩm của ông, đặc biệt là "Cộng Hòa", vẫn có ảnh hưởng lớn đến triết học ngày nay.

Một trong những đóng góp lớn nhất của Plato là lý thuyết về những ý tưởng (Forms). Ông tin rằng những ý tưởng này là vĩnh cửu, không thay đổi, và hoàn hảo. Những vật thể vật chất mà chúng ta nhìn thấy chỉ là những bóng không hoàn hảo của những ý tưởng này.

Plato cũng dạy về công lý, đạo đức, và chính trị. Ông tin rằng một xã hội tốt đẹp là một xã hội được tổ chức theo những nguyên tắc của công lý. Ông dạy rằng mỗi người nên làm những gì họ phù hợp nhất để làm, và xã hội sẽ hoạt động tốt nhất khi mỗi người làm nhiệm vụ của họ.

Plato cũng viết về tình yêu, sắc đẹp, và sự bất tử của linh hồn. Ông tin rằng linh hồn là bất tử, và nó tồn tại trước khi chúng ta sinh ra và sau khi chúng ta chết.

Cuộc sống của Plato là một cuộc sống dành cho triết học. Ông không bao giờ kết hôn, và ông dành toàn bộ cuộc sống của mình để dạy và viết về triết học.`,
    },
    plotinus: {
      name: "Plotinus: Nhà Triết Học Của Một",
      content: `Plotinus (204-270 SCN) là một nhà triết học Hy Lạp-La Mã nổi tiếng, người phát triển Tân Platon. Ông tin rằng thực tại là một hệ thống phân cấp, với Một (The One) ở đỉnh, từ đó mọi thứ khác phát sinh.

Plotinus dạy rằng mục tiêu của cuộc sống là trở lại với Một thông qua thiền định và sự tự chủ. Ông nhấn mạnh tầm quan trọng của sự tinh khiết, sự bình thản, và sự hiểu biết về bản chất thực sự của thực tại.

Plotinus tin rằng Một là vô hạn, vô tính, và vô thể hiểu được. Từ Một, mọi thứ khác phát sinh thông qua một quá trình gọi là "emanation" (phát sinh). Trí tuệ phát sinh từ Một, Linh hồn phát sinh từ Trí tuệ, và Vật chất phát sinh từ Linh hồn.

Plotinus dạy rằng chúng ta nên cố gắng trở lại với Một. Điều này có thể đạt được thông qua thiền định, sự tự chủ, và sự hiểu biết về bản chất thực sự của thực tại. Ông tin rằng khi chúng ta trở lại với Một, chúng ta sẽ tìm thấy sự bình thản và hạnh phúc thực sự.

Plotinus cũng viết về sắc đẹp. Ông tin rằng sắc đẹp là một phản ánh của Một. Khi chúng ta nhìn thấy sắc đẹp, chúng ta đang nhìn thấy một phản ánh của Một.

Cuộc sống của Plotinus là một cuộc sống dành cho triết học. Ông sống một cuộc sống đơn giản, và ông dành toàn bộ cuộc sống của mình để dạy và viết về triết học.`,
    },
  },
  aristotelian: {
    aristotle: {
      name: "Aristotle: Nhà Triết Học Của Lý Trí",
      content: `Aristotle (384-322 SCN) là một trong những nhà triết học vĩ đại nhất trong lịch sử. Ông là học trò của Plato và người thầy của Alexander Đại Đế. Aristotle tin rằng chúng ta nên quan sát thế giới tự nhiên và sử dụng lý trí để hiểu nó.

Aristotle sáng lập Lyceum tại Athens, nơi ông dạy triết học, khoa học, và chính trị. Tác phẩm của ông bao gồm các chủ đề như logic, siêu hình học, đạo đức, chính trị, sinh học, và vật lý.

Một trong những đóng góp lớn nhất của Aristotle là việc ông phát triển logic. Ông dạy rằng chúng ta nên sử dụng lý trí để hiểu thế giới. Ông phát triển hệ thống logic gọi là "syllogism", đó là một cách suy luận từ những tiền đề đến những kết luận.

Aristotle cũng dạy về đạo đức. Ông tin rằng hạnh phúc (eudaimonia) đạt được thông qua việc phát triển những đức tính tốt và sống một cuộc sống cân bằng. Ông dạy rằng đức hạnh là một thói quen, và chúng ta đạt được nó thông qua thực hành.

Aristotle cũng viết về chính trị. Ông tin rằng con người là những sinh vật chính trị, và chúng ta nên sống trong một cộng đồng. Ông dạy rằng một xã hội tốt đẹp là một xã hội được tổ chức theo những nguyên tắc của công lý.

Aristotle cũng viết về sinh học. Ông quan sát những sinh vật khác nhau và cố gắng phân loại chúng. Ông phát triển một hệ thống phân loại dựa trên những đặc điểm của những sinh vật.

Cuộc sống của Aristotle là một cuộc sống dành cho triết học và khoa học. Ông dành toàn bộ cuộc sống của mình để dạy, viết, và quan sát thế giới tự nhiên.`,
    },
    "thomas-aquinas": {
      name: "Thomas Aquinas: Nhà Thần Học Của Lý Trí",
      content: `Thomas Aquinas (1225-1274) là một nhà thần học Trung Cổ nổi tiếng, người kết hợp triết học của Aristotle với Kitô giáo. Ông tin rằng lý trí và đức tin không mâu thuẫn với nhau, mà bổ sung cho nhau.

Aquinas dạy rằng chúng ta có thể sử dụng lý trí để hiểu Thiên Chúa và những điều thánh thiêng. Ông viết rất nhiều về đạo đức, chính trị, và thần học. Tác phẩm của ông vẫn có ảnh hưởng lớn đến Kitô giáo ngày nay.

Một trong những đóng góp lớn nhất của Aquinas là việc ông phát triển "Năm Cách Chứng Minh Sự Tồn Tại Của Thiên Chúa" (Five Ways). Ông dạy rằng chúng ta có thể sử dụng lý trí để chứng minh sự tồn tại của Thiên Chúa.

Aquinas cũng dạy về đạo đức. Ông tin rằng đạo đức là dựa trên bản chất con người. Ông dạy rằng chúng ta nên sống theo bản chất của chúng ta, và điều này có nghĩa là chúng ta nên sống theo những nguyên tắc của công lý, sự khôn ngoan, sự can đảm, và sự tiết độ.

Aquinas cũng viết về chính trị. Ông tin rằng một xã hội tốt đẹp là một xã hội được tổ chức theo những nguyên tắc của công lý. Ông dạy rằng chính phủ nên phục vụ lợi ích chung.

Aquinas cũng viết về tình yêu. Ông tin rằng tình yêu là cơ sở của tất cả những đức tính tốt. Ông dạy rằng chúng ta nên yêu Thiên Chúa và yêu những người khác như chính mình.

Cuộc sống của Aquinas là một cuộc sống dành cho thần học và triết học. Ông dành toàn bộ cuộc sống của mình để dạy, viết, và suy tư về Thiên Chúa và những điều thánh thiêng.`,
    },
  },
  cynicism: {
    diogenes: {
      name: "Diogenes: Triết Gia Của Sự Tự Do",
      content: `Diogenes (412-323 SCN) là người sáng lập trường phái Chủ nghĩa Khoa học. Ông nổi tiếng vì sự sống khắc khổ và những hành động gây sốc nhằm thách thức những quy ước xã hội.

Diogenes tin rằng chúng ta nên thoát khỏi những mong muốn không cần thiết và sống một cuộc sống đơn giản, tự do. Ông sống trong một thùng rác và từ chối những tài sản vật chất. Diogenes dạy rằng sự tự do thực sự đến từ việc từ bỏ những mong muốn không cần thiết.

Diogenes nổi tiếng vì những câu nói thông minh và những hành động gây sốc của ông. Ông thường đi bộ trên đường phố Athens, nói những điều gây sốc để thách thức những quy ước xã hội. Ông tin rằng chúng ta nên sống theo bản chất của chúng ta, không phải theo những quy ước xã hội.

Một trong những câu nói nổi tiếng của Diogenes là: "Tôi không cần bất cứ điều gì ngoài những gì tự nhiên cung cấp." Ông tin rằng chúng ta chỉ cần những thứ cơ bản để sống - thức ăn, nước, và nơi trú ẩn.

Diogenes cũng dạy về sự tự do. Ông tin rằng sự tự do thực sự không phải là sự vắng mặt của những ràng buộc bên ngoài, mà là sự vắng mặt của những ràng buộc bên trong - những mong muốn vô độ, những nỗi sợ hãi, và những thành kiến.

Diogenes cũng viết về chính trị. Ông tin rằng chúng ta nên sống theo bản chất của chúng ta, không phải theo những quy ước xã hội. Ông dạy rằng chính phủ là không cần thiết, và chúng ta nên sống một cuộc sống độc lập.

Cuộc sống của Diogenes là một minh chứng cho những lời dạy của ông. Ông sống một cuộc sống đơn giản, tự do, và không bị chi phối bởi những quy ước xã hội.`,
    },
    crates: {
      name: "Crates: Triết Gia Của Sự Hài Hước",
      content: `Crates (365-285 SCN) là một nhà triết học Hy Lạp nổi tiếng, người theo dõi Diogenes. Ông tin rằng chúng ta nên sống một cuộc sống đơn giản, tự do khỏi những mong muốn không cần thiết.

Crates từ bỏ tài sản của mình và sống như một người khiêm tốn. Ông dạy rằng sự tự do thực sự đến từ việc giải phóng bản thân khỏi những mong muốn vô độ. Crates nổi tiếng vì sự hài hước và những câu nói thông minh của ông.

Crates cũng dạy về tình bạn. Ông tin rằng tình bạn là một trong những khoái lạc lớn nhất của cuộc sống. Ông sống với những bạn bè, và họ chia sẻ những bữa ăn đơn giản và những cuộc trò chuyện có ý nghĩa.

Crates cũng viết về tình yêu. Ông tin rằng tình yêu là một trong những khoái lạc lớn nhất của cuộc sống. Ông kết hôn với Hipparchia, một phụ nữ cũng theo chủ nghĩa Khoa học, và họ sống một cuộc sống đơn giản cùng nhau.

Crates cũng dạy về sự tự do. Ông tin rằng sự tự do thực sự đến từ việc giải phóng bản thân khỏi những mong muốn vô độ. Ông dạy rằng chúng ta nên sống theo bản chất của chúng ta, không phải theo những quy ước xã hội.

Cuộc sống của Crates là một minh chứng cho những lời dạy của ông. Ông sống một cuộc sống đơn giản, tự do, và không bị chi phối bởi những quy ước xã hội.`,
    },
  },
  skepticism: {
    pyrrho: {
      name: "Pyrrho: Triết Gia Của Nghi Vấn",
      content: `Pyrrho (365-275 SCN) là người sáng lập trường phái Chủ nghĩa Hoài nghi. Ông dạy rằng chúng ta không thể biết chắc chắn về bất cứ điều gì, và chúng ta nên tạm ngừng phán xét (epoché) về những vấn đề không thể quyết định được.

Pyrrho tin rằng điều này dẫn đến sự yên tĩnh (ataraxia) và hạnh phúc. Ông dạy rằng khi chúng ta tạm ngừng phán xét, chúng ta sẽ không còn bị xáo trộn bởi những tranh cãi vô ích.

Pyrrho du hành khắp thế giới, bao gồm cả Ấn Độ, để tìm hiểu về những triết học khác nhau. Ông tin rằng chúng ta có thể học hỏi từ những triết học khác nhau, nhưng chúng ta không nên tin tưởng hoàn toàn vào bất cứ điều gì.

Pyrrho dạy rằng chúng ta nên nghi vấn tất cả những gì chúng ta tin tưởng. Ông tin rằng không có gì là chắc chắn, và chúng ta nên cẩn thận trong việc đưa ra kết luận.

Pyrrho cũng dạy về sự tự do. Ông tin rằng sự tự do thực sự đến từ việc giải phóng bản thân khỏi những niềm tin vô căn cứ. Ông dạy rằng khi chúng ta tạm ngừng phán xét, chúng ta sẽ tìm thấy sự tự do thực sự.

Cuộc sống của Pyrrho là một minh chứng cho những lời dạy của ông. Ông sống một cuộc sống đơn giản, và ông không bao giờ khẳng định rằng ông biết chắc chắn về bất cứ điều gì.`,
    },
    "sextus-empiricus": {
      name: "Sextus Empiricus: Nhà Triết Học Của Nghi Vấn",
      content: `Sextus Empiricus (160-210 SCN) là một nhà triết học Hy Lạp-La Mã nổi tiếng, người phát triển chủ nghĩa Hoài nghi. Ông viết rất nhiều về logic, triết học, và y học.

Sextus Empiricus dạy rằng chúng ta nên nghi vấn tất cả những gì chúng ta tin tưởng, bao gồm cả những gì chúng ta cảm thấy. Ông tin rằng sự yên tĩnh (ataraxia) đạt được thông qua việc tạm ngừng phán xét về những vấn đề không thể quyết định được.

Sextus Empiricus viết rất nhiều về những cách khác nhau để nghi vấn. Ông dạy rằng chúng ta có thể nghi vấn bằng cách so sánh những quan điểm khác nhau, hoặc bằng cách chỉ ra những mâu thuẫn trong những quan điểm.

Sextus Empiricus cũng dạy về y học. Ông tin rằng chúng ta nên sử dụng những phương pháp thực nghiệm để kiểm tra những lý thuyết y học. Ông dạy rằng chúng ta nên cẩn thận trong việc đưa ra kết luận về những vấn đề y học.

Sextus Empiricus cũng dạy về sự tự do. Ông tin rằng sự tự do thực sự đến từ việc giải phóng bản thân khỏi những niềm tin vô căn cứ. Ông dạy rằng khi chúng ta tạm ngừng phán xét, chúng ta sẽ tìm thấy sự tự do thực sự.

Cuộc sống của Sextus Empiricus là một cuộc sống dành cho triết học. Ông dành toàn bộ cuộc sống của mình để dạy, viết, và suy tư về những vấn đề triết học.`,
    },
  },
  rationalism: {
    descartes: {
      name: "René Descartes: Cha Đẻ Của Triết Học Hiện Đại",
      content: `René Descartes (1596-1650) được coi là cha đẻ của triết học hiện đại. Trong nỗ lực tìm kiếm một nền tảng tri thức chắc chắn không thể bị hoài nghi, ông đã sử dụng "phương pháp hoài nghi" (methodic doubt), gạt bỏ tất cả mọi thứ có thể nghi ngờ, kể cả thông tin từ các giác quan (vì chúng có thể đánh lừa ta).

Cuối cùng, Descartes nhận ra một điều duy nhất ông không thể hoài nghi: đó là chính sự hoài nghi của ông. Nếu ông đang hoài nghi, nghĩa là ông đang tư duy, và nếu ông đang tư duy, thì ông phải tồn tại. Câu nói bất hủ "Cogito, ergo sum" ("Tôi tư duy, vậy tôi tồn tại") đã trở thành điểm tựa vững chắc đầu tiên. Từ đó, Descartes xây dựng lại toàn bộ hệ thống tri thức, chứng minh sự tồn tại của Chúa (như một ý niệm bẩm sinh hoàn hảo) và sau đó là sự tồn tại của thế giới vật chất.

Ông phân chia thực tại thành hai bản thể riêng biệt: "bản thể tư duy" (res cogitans - tâm trí) và "bản thể quảng tính" (res extensa - vật chất). Sự phân chia này, mặc dù gây ra những vấn đề triết học lâu dài (vấn đề tương tác tâm-thân), đã định hình cách chúng ta suy nghĩ về tâm trí và vật chất cho hàng thế kỷ.

## Phương Pháp Hoài Nghi (Methodic Doubt)

Descartes không chỉ hoài nghi một cách bừa bãi. Ông phát triển một phương pháp có hệ thống. Ông bắt đầu bằng cách hoài nghi về tất cả những gì có thể hoài nghi được. Trước tiên, ông hoài nghi về các giác quan, vì chúng đôi khi đánh lừa chúng ta. Sau đó, ông hoài nghi về sự tồn tại của thế giới vật chất, vì có thể ông đang mơ. Cuối cùng, ông thậm chí hoài nghi về sự tồn tại của Chúa, vì có thể có một "ma quỷ xảo quyệt" (demon malin) đang đánh lừa ông.

Nhưng khi ông cố gắng hoài nghi về chính sự hoài nghi của mình, ông nhận ra rằng điều này là không thể. Sự hoài nghi chứng minh sự tồn tại của một cái gì đó đang hoài nghi - đó chính là tâm trí của ông. Từ đây, Descartes xây dựng lại toàn bộ hệ thống tri thức.

## Ý Niệm Bẩm Sinh (Innate Ideas)

Descartes tin rằng con người được sinh ra với một số ý niệm bẩm sinh - những sự thật cơ bản về thực tại, logic, hoặc đạo đức mà không cần học hỏi từ thế giới bên ngoài. Ý niệm quan trọng nhất là ý niệm về Chúa - một thực thể vô hạn, hoàn hảo. Descartes lập luận rằng một tâm trí hữu hạn như của con người không thể tự tạo ra ý niệm về vô hạn. Do đó, ý niệm này phải đến từ Chúa.

## Di Sản

Descartes đã đặt nền móng cho triết học hiện đại. Mặc dù nhiều ý tưởng của ông đã bị thách thức, phương pháp của ông - sử dụng lý trí để tìm kiếm sự thật - vẫn là nền tảng của triết học và khoa học ngày nay. Ông cũng là một nhà toán học vĩ đại, phát minh ra hệ tọa độ Descartes, vẫn được sử dụng rộng rãi ngày nay.`,
    },
    spinoza: {
      name: "Baruch Spinoza: Triết Gia Của Một",
      content: `Baruch Spinoza (1632-1677) là một nhà triết học Hà Lan nổi tiếng, người phát triển Chủ nghĩa Duy lý theo một hướng hoàn toàn khác biệt so với Descartes. Spinoza đã đưa Chủ nghĩa Duy lý đến một tầm cao mới, logic và chặt chẽ hơn. Ông không chấp nhận sự phân chia tâm trí-vật chất của Descartes. Thay vào đó, Spinoza lập luận rằng chỉ có một bản thể duy nhất (Substance) tồn tại, và bản thể đó là tất cả mọi thứ: đó vừa là Thượng Đế (God), vừa là Tự Nhiên (Nature).

Mọi thứ khác trong vũ trụ, bao gồm cả tâm trí và vật chất, không phải là các bản thể riêng biệt, mà chỉ là các "thuộc tính" (attributes) hoặc "dạng thái" (modes) của bản thể duy nhất đó. Trong tác phẩm "Đạo đức học" (Ethics), Spinoza trình bày hệ thống triết học của mình theo một cấu trúc hình học nghiêm ngặt, bắt đầu từ các định nghĩa và tiên đề, sau đó suy luận logic ra các hệ quả, giống như cách Euclid xây dựng hình học.

## Một Bản Thể Duy Nhất (Monism)

Spinoza tin rằng chỉ có một bản thể duy nhất tồn tại - Thượng Đế hay Tự Nhiên. Tất cả mọi thứ khác là các dạng thái của bản thể này. Tâm trí và vật chất không phải là hai bản thể riêng biệt, mà là hai thuộc tính khác nhau của cùng một bản thể. Điều này giải quyết vấn đề tương tác tâm-thân mà Descartes gặp phải.

## Tất Định (Determinism)

Đối với Spinoza, vũ trụ là một hệ thống tất định hoàn toàn hợp lý. Mọi sự kiện đều là kết quả tất yếu của các nguyên nhân trước đó. Không có tự do ý chí theo nghĩa truyền thống. Tuy nhiên, Spinoza không coi đây là một điều tồi tệ. Thay vào đó, ông tin rằng tự do thực sự là hiểu và chấp nhận vị trí của mình trong trật tự logic đó.

## Di Sản

Spinoza đã có ảnh hưởng sâu rộng đến triết học hiện đại, từ Hegel đến Einstein. Mặc dù bị coi là một người dị giáo trong thời đại của ông, Spinoza ngày nay được công nhận là một trong những nhà triết học vĩ đại nhất. Tư tưởng của ông về một vũ trụ thống nhất, hợp lý, và tất định đã ảnh hưởng đến cả khoa học và triết học.`,
    },
    leibniz: {
      name: "Gottfried Wilhelm Leibniz: Triết Gia Của Đơn Tử",
      content: `Gottfried Wilhelm Leibniz (1646-1716) là một bộ óc thiên tài, có đóng góp lớn cho cả toán học (phát minh ra phép tính vi phân độc lập với Newton) và triết học. Ông cố gắng dung hòa tư tưởng của Descartes và Spinoza với đức tin Cơ Đốc giáo. Leibniz giới thiệu khái niệm "đơn tử" (monad) - những "nguyên tử" tinh thần, không có quảng tính, không tương tác với nhau. Mỗi đơn tử là một trung tâm nhận thức, phản chiếu toàn bộ vũ trụ từ góc nhìn riêng của nó.

Thượng Đế, trong vai trò là "Đơn tử Tối cao", đã thiết lập một "sự hài hòa tiền định" (pre-established harmony) giữa tất cả các đơn tử, giống như các đồng hồ được lên dây cót hoàn hảo để chạy đồng bộ. Do đó, dù chúng không tương tác, hành động của chúng dường như ăn khớp với nhau.

## Nguyên Lý Lý Do Đầy Đủ (Principle of Sufficient Reason)

Leibniz nổi tiếng với "Nguyên lý Lý do Đầy đủ" - khẳng định rằng mọi sự thật, mọi sự kiện đều phải có một lý do đầy đủ giải thích tại sao nó là như vậy mà không phải là khác. Từ đó, ông kết luận rằng Thượng Đế, với sự toàn tri và toàn thiện, đã lựa chọn tạo ra "thế giới tốt nhất trong tất cả các thế giới có thể".

## Thế Giới Tốt Nhất (Best of All Possible Worlds)

Leibniz tin rằng Thượng Đế, là một thực thể toàn thiện, sẽ chọn tạo ra thế giới tốt nhất có thể. Điều này không có nghĩa là thế giới này là hoàn hảo - nó vẫn chứa đầy đau khổ và tội lỗi. Nhưng nó là thế giới tốt nhất mà Thượng Đế có thể tạo ra, xem xét tất cả các ràng buộc và khả năng.

## Di Sản

Leibniz đã có ảnh hưởng sâu rộng đến triết học và toán học. Phép tính vi phân của ông vẫn được sử dụng rộng rãi ngày nay. Tư tưởng của ông về đơn tử đã ảnh hưởng đến sự phát triển của vật lý hiện đại. Mặc dù một số ý tưởng của ông đã bị thách thức, Leibniz vẫn được công nhận là một trong những bộ óc vĩ đại nhất của lịch sử.`,
    },
  },
  empiricism: {
    locke: {
      name: "John Locke: Cha Đẻ Của Chủ Nghĩa Kinh Nghiệm",
      content: `John Locke (1632-1704) là người đầu tiên hệ thống hóa Chủ nghĩa Kinh nghiệm một cách toàn diện. Trong tác phẩm "Một luận văn về sự hiểu biết của con người", ông tấn công trực diện vào khái niệm "ý niệm bẩm sinh" của Descartes. Locke lập luận rằng nếu có ý niệm bẩm sinh, thì trẻ em và những người thiểu năng trí tuệ cũng phải biết chúng, nhưng thực tế không phải vậy.

Locke cho rằng tâm trí giống như một "tờ giấy trắng" (Tabula Rasa). Mọi tri thức đến từ hai nguồn: cảm giác (sensation - dữ liệu từ thế giới bên ngoài như màu sắc, âm thanh) và phản tư (reflection - sự quan sát các hoạt động nội tâm của chính tâm trí như suy nghĩ, hoài nghi).

Ông phân biệt "ý niệm đơn giản" (simple ideas - được thụ động tiếp nhận từ cảm giác) và "ý niệm phức hợp" (complex ideas - được tâm trí chủ động tạo ra bằng cách kết hợp, so sánh các ý niệm đơn giản). Locke cũng phân biệt "phẩm chất sơ cấp" (primary qualities - tồn tại khách quan trong vật thể như hình dạng, kích thước) và "phẩm chất thứ cấp" (secondary qualities - chỉ tồn tại trong tâm trí người quan sát như màu sắc, mùi vị).

## Tabula Rasa (Tờ Giấy Trắng)

Khái niệm "Tabula Rasa" của Locke là một trong những ý tưởng có ảnh hưởng nhất trong triết học. Nó cho rằng con người được sinh ra mà không có bất kỳ kiến thức nào, và tất cả kiến thức đều được lấp đầy dần qua kinh nghiệm. Điều này có ý nghĩa sâu sắc cho giáo dục - nó cho rằng mọi người đều có khả năng học hỏi, và sự khác biệt giữa các cá nhân là do kinh nghiệm khác nhau.

## Phẩm Chất Sơ Cấp và Thứ Cấp

Locke phân biệt giữa các tính chất của vật thể mà tồn tại khách quan (như hình dạng, kích thước, chuyển động) và các tính chất mà chỉ tồn tại trong tâm trí người quan sát (như màu sắc, mùi vị, âm thanh). Sự phân biệt này có ảnh hưởng lớn đến sự phát triển của khoa học hiện đại.

## Di Sản

Locke đã có ảnh hưởng sâu rộng đến triết học, giáo dục, và chính trị. Tư tưởng của ông về quyền tự nhiên và hợp đồng xã hội đã ảnh hưởng đến sự phát triển của dân chủ hiện đại. Mặc dù một số ý tưởng của ông đã bị thách thức, Locke vẫn được công nhận là một trong những nhà triết học quan trọng nhất.`,
    },
    berkeley: {
      name: "George Berkeley: Triết Gia Của Duy Tâm",
      content: `George Berkeley (1685-1753), một giám mục người Ireland, đã đẩy lập luận của Locke đến một kết luận duy tâm triệt để. Berkeley đồng ý rằng mọi tri thức đến từ giác quan, nhưng ông đặt câu hỏi: Nếu chúng ta chỉ biết đến các "ý niệm" (ideas) trong tâm trí, làm thế nào Locke có thể khẳng định sự tồn tại của "vật chất" khách quan (nguyên nhân gây ra các phẩm chất sơ cấp)?

Berkeley lập luận rằng sự phân biệt của Locke là không hợp lý. Cả phẩm chất sơ cấp (hình dạng) lẫn thứ cấp (màu sắc) đều chỉ là các ý niệm trong tâm trí. Ông đi đến kết luận táo bạo: "Esse est percipi" ("Tồn tại là được tri giác"). Một vật chỉ tồn tại khi nó được một tâm trí nào đó tri giác (quan sát).

Vậy cái cây trong rừng có tồn tại khi không ai nhìn nó? Berkeley trả lời: Có, bởi vì nó luôn được tri giác bởi một Tâm trí Vĩ đại, đó chính là Thượng Đế. Đối với Berkeley, không có thứ gì gọi là "vật chất" tồn tại độc lập; toàn bộ thực tại chỉ là các ý niệm trong tâm trí của Thượng Đế và các tâm trí hữu hạn (con người).

## Duy Tâm (Idealism)

Berkeley là một trong những nhà triết học duy tâm nổi tiếng nhất. Ông tin rằng chỉ có tâm trí và các ý niệm tồn tại. Không có "vật chất" độc lập. Điều này có vẻ lạ lùng, nhưng Berkeley lập luận rằng nó thực sự giải quyết nhiều vấn đề triết học.

## Thượng Đế Là Tâm Trí Vĩ Đại

Để giải thích tại sao các vật thể tiếp tục tồn tại khi chúng ta không quan sát chúng, Berkeley đề xuất rằng Thượng Đế là một Tâm trí Vĩ đại, luôn quan sát mọi thứ. Do đó, mọi vật thể đều tồn tại trong tâm trí của Thượng Đế.

## Di Sản

Mặc dù duy tâm của Berkeley không được chấp nhận rộng rãi, nó đã có ảnh hưởng sâu rộng đến triết học. Nó đặt ra những câu hỏi quan trọng về bản chất của thực tại và vai trò của tâm trí trong việc tạo ra thế giới mà chúng ta trải nghiệm.`,
    },
    hume: {
      name: "David Hume: Triết Gia Của Nghi Vấn",
      content: `David Hume (1711-1776) là nhà kinh nghiệm chủ nghĩa triệt để và hoài nghi nhất. Ông áp dụng các nguyên tắc của Locke một cách nghiêm ngặt và đi đến những kết luận đáng kinh ngạc. Hume phân chia mọi nhận thức thành "ấn tượng" (impressions - dữ liệu giác quan mạnh mẽ, sống động) và "ý niệm" (ideas - các bản sao mờ nhạt của ấn tượng trong suy nghĩ).

Hume tấn công vào hai khái niệm nền tảng của triết học và khoa học: nhân quả (causality) và bản ngã (self).

Về nhân quả: Hume lập luận rằng chúng ta không bao giờ trải nghiệm được "sự kết nối tất yếu" giữa nguyên nhân (A) và kết quả (B). Chúng ta chỉ thấy A xảy ra, sau đó B xảy ra, và điều này lặp đi lặp lại. Khái niệm "nhân quả" không phải là một quy luật khách quan của thế giới, mà chỉ là một "thói quen" (custom) của tâm trí, một sự mong đợi tâm lý rằng tương lai sẽ giống như quá khứ (đây gọi là "Vấn đề Quy nạp").

Về bản ngã: Khi Hume nhìn vào "bên trong" mình, ông nói ông không bao giờ tìm thấy một "cái tôi" (self) đơn nhất, ổn định. Ông chỉ tìm thấy một chuỗi liên tục các cảm giác, suy nghĩ, cảm xúc... đang trôi qua. Do đó, "cái tôi" không phải là một thực thể, mà chỉ là một "bó" (a bundle) các nhận thức rời rạc.

## Vấn Đề Quy Nạp (Problem of Induction)

Hume đặt ra một vấn đề cơ bản: Làm thế nào chúng ta có thể biết chắc chắn rằng tương lai sẽ giống như quá khứ? Chúng ta dựa vào kinh nghiệm quá khứ để dự đoán tương lai, nhưng điều này dựa trên giả định rằng tự nhiên là đều đặn. Nhưng làm thế nào chúng ta biết được điều này? Vấn đề này vẫn là một trong những vấn đề cơ bản nhất trong triết học khoa học.

## Di Sản

Sự hoài nghi sâu sắc của Hume đã "đánh thức" Immanuel Kant khỏi "giấc ngủ giáo điều" và thúc đẩy Kant tạo ra cuộc cách mạng triết học của riêng mình. Quan trọng hơn, Chủ nghĩa Kinh nghiệm đã cung cấp phương pháp luận cốt lõi cho khoa học thực nghiệm, nhấn mạnh tầm quan trọng của quan sát, dữ liệu và bằng chứng trong việc xây dựng tri thức.`,
    },
  },
  postmodernism: {
    lyotard: {
      name: "Jean-François Lyotard: Triết Gia Của Hậu Hiện Đại",
      content: `Jean-François Lyotard (1924-1998) là một trong những nhà triết học Hậu Hiện Đại quan trọng nhất. Ông nổi tiếng với định nghĩa về Hậu Hiện Đại như là "hoài nghi các đại tự sự" (incredulity toward metanarratives). Lyotard cho rằng những "đại tự sự" lớn (như câu chuyện về sự tiến bộ của Khoa học, sự giải phóng của con người) đã mất đi tính khả tín.

Chúng không phải là những sự thật khách quan, mà là những cấu trúc tư tưởng được tạo ra để phục vụ cho các mục đích quyền lực. Thay vào đó, Hậu Hiện Đại đề cao các "tự sự nhỏ" (local narratives) – những câu chuyện riêng lẻ, mang tính địa phương, cá nhân và không có tham vọng trở thành sự thật phổ quát.

## Đại Tự Sự (Metanarratives)

Lyotard định nghĩa "đại tự sự" là những câu chuyện lớn, bao trùm mà một nền văn hóa dùng để hợp thức hóa chính nó. Ví dụ: "câu chuyện" về sự tiến bộ của Khoa học (rằng khoa học sẽ giải quyết tất cả các vấn đề của con người), "câu chuyện" về sự giải phóng của con người (qua Chủ nghĩa Mác hoặc Chủ nghĩa Tự do), hay "câu chuyện" về sự cứu rỗi của Tôn giáo.

Lyotard cho rằng những "đại tự sự" này đã mất đi tính khả tín. Chúng không phải là những sự thật khách quan, mà là những cấu trúc tư tưởng được tạo ra để phục vụ cho các mục đích quyền lực.

## Tự Sự Nhỏ (Local Narratives)

Thay vào đó, Lyotard đề cao các "tự sự nhỏ" – những câu chuyện riêng lẻ, mang tính địa phương, cá nhân. Những tự sự này không có tham vọng trở thành sự thật phổ quát. Chúng chỉ là những cách khác nhau để hiểu và diễn giải thế giới.

## Di Sản

Lyotard đã có ảnh hưởng sâu rộng đến triết học, văn học, kiến trúc, và các ngành khoa học xã hội. Tư tưởng của ông về sự sụp đổ của các "đại tự sự" đã giúp định hình cách chúng ta suy nghĩ về tri thức, quyền lực, và văn hóa trong thế kỷ 21.`,
    },
    foucault: {
      name: "Michel Foucault: Triết Gia Của Quyền Lực",
      content: `Michel Foucault (1926-1984) là một trong những tiếng nói ảnh hưởng nhất của Hậu Hiện Đại. Foucault lập luận rằng tri thức không bao giờ "ngây thơ" hay "trung lập". Tri thức và quyền lực luôn tồn tại song song và củng cố lẫn nhau (Quyền Lực/Tri Thức).

Không phải là "quyền lực" cấm đoán "tri thức", mà chính "tri thức" tạo ra "quyền lực". Ví dụ, các ngành "khoa học nhân văn" (như tâm thần học, tội phạm học) không chỉ "khám phá" ra sự thật về "người điên" hay "tội phạm", mà chúng còn tạo ra chính các phạm trù đó, định nghĩa thế nào là "bình thường" và thế nào là "bệnh hoạn", qua đó cho phép các thể chế (nhà thương điên, nhà tù) thực thi quyền lực kiểm soát xã hội.

## Quyền Lực/Tri Thức (Power/Knowledge)

Foucault cho rằng quyền lực không chỉ là một cái gì đó mà một nhóm người có được để áp dụng lên những người khác. Thay vào đó, quyền lực là một mối quan hệ, một cách thức tổ chức xã hội. Và tri thức là một phần không thể tách rời của quyền lực này.

Khi chúng ta "biết" điều gì đó, chúng ta cũng đang tham gia vào các mối quan hệ quyền lực. Ví dụ, khi một bác sĩ "chẩn đoán" một bệnh, ông ta không chỉ đang "khám phá" một sự thật khách quan, mà cũng đang tạo ra một danh mục, một cách phân loại con người, qua đó cho phép các thể chế y tế thực thi quyền lực.

## Biopolitics (Chính Trị Sinh Học)

Foucault cũng phát triển khái niệm "biopolitics" – cách thức mà quyền lực hiện đại kiểm soát không chỉ hành động của con người, mà cả cơ thể và sức khỏe của họ. Các chính sách y tế, giáo dục, và xã hội không chỉ là những nỗ lực để cải thiện cuộc sống, mà cũng là những cách thức để kiểm soát dân số.

## Di Sản

Foucault đã có ảnh hưởng sâu rộng đến triết học, xã hội học, lịch sử, và các ngành khoa học xã hội khác. Tư tưởng của ông về mối quan hệ giữa quyền lực và tri thức đã buộc chúng ta phải đặt câu hỏi về các giả định ngầm, các cấu trúc quyền lực, và vai trò của các thể chế trong việc định hình thế giới của chúng ta.`,
    },
    derrida: {
      name: "Jacques Derrida: Triết Gia Của Giải Cấu Trúc",
      content: `Jacques Derrida (1930-2004) là một triết gia quan trọng khác của Hậu Hiện Đại, tập trung vào ngôn ngữ. Ông cho rằng toàn bộ triết học phương Tây dựa trên "Siêu hình học của sự Hiện diện" (metaphysics of presence) – niềm tin rằng chúng ta có thể tiếp cận trực tiếp với "sự thật" hoặc "ý nghĩa" thuần túy.

Derrida, thông qua phương pháp "giải cấu trúc" (deconstruction), cho thấy rằng ngôn ngữ không phải là một công cụ trong suốt để phản ánh thực tại. Ý nghĩa của một từ luôn bị "trì hoãn" (différance – một thuật ngữ Derrida tự tạo ra) và phụ thuộc vào vô số các từ khác.

## Giải Cấu Trúc (Deconstruction)

Giải cấu trúc không phải là một phương pháp để "phá hủy" một văn bản, mà là một cách để "lật đổ" các cặp đối lập nhị nguyên trong văn bản, cho thấy cái bị coi là "thứ yếu" (ví dụ: chữ viết) thực ra lại là điều kiện tiên quyết cho cái "chính yếu" (ví dụ: lời nói).

Derrida cho rằng triết học phương Tây luôn ưu tiên lời nói hơn chữ viết, vì lời nói được coi là gần gũi hơn với "ý nghĩa" hay "sự thật". Nhưng Derrida cho thấy rằng chữ viết thực ra là điều kiện tiên quyết cho lời nói. Không có chữ viết, không có ngôn ngữ, không có lời nói.

## Différance (Sự Trì Hoãn)

Derrida phát minh ra từ "différance" (một từ Pháp có thể có nghĩa là "sự khác biệt" hoặc "sự trì hoãn") để chỉ ra rằng ý nghĩa của một từ không bao giờ có mặt hoàn toàn. Nó luôn bị trì hoãn, phụ thuộc vào các từ khác, các ngữ cảnh khác.

## Di Sản

Derrida đã có ảnh hưởng sâu rộng đến triết học, văn học, pháp luật, và các ngành khoa học xã hội khác. Mặc dù tư tưởng của ông thường bị coi là khó hiểu và trừu tượng, nó đã buộc chúng ta phải đặt câu hỏi về bản chất của ngôn ngữ, ý nghĩa, và thực tại.`,
    },
  },
}

export default function PhilosopherDetailPage() {
  const params = useParams()
  const topic = params.topic as string
  const philosopher = params.philosopher as string

  const content = philosopherContent[topic]?.[philosopher]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Không tìm thấy</h1>
          <Link href="/" className="text-primary hover:underline">
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-playfair)" }}>
            {content.name}
          </h1>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-foreground/80 leading-relaxed text-lg whitespace-pre-wrap">
            {content.content.split("\n\n").map((paragraph: string, index: number) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith("##") ? (
                  <h2
                    className="text-3xl font-bold text-accent mb-4 mt-8"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                ) : (
                  <p className="text-foreground/80 leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back button */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Quay Lại Bản Đồ Thiên Hà
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
