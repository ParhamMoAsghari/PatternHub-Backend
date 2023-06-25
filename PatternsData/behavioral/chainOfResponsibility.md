# الگوی زنجیره مسئولیت (Chain of Responsibility Pattern)

### همچنین شناخته شده به عنوان:
- الگوی مسئولیت متوالی

### انگیزه (Motivation):
الگوی زنجیره مسئولیت به ما کمک می‌کند تا درخواست‌هایی را که باید در یک سلسله مراتب اجرا شوند، مدیریت کنیم. این الگو اجازه می‌دهد تا درخواست به صورت ترتیبی از یک گروه از اشیاء مسئول عبور کند تا تا زمانی که یکی از آنها بتواند درخواست را پردازش کند.

### قابلیت استفاده (Applicability):
الگوی زنجیره مسئولیت مناسب است وقتی که:
- بخواهیم یک درخواست را به یکی از اشیاء در یک سلسله مراتب ارسال کنیم.
- دارای چندین شیء که قادر به پردازش درخواست هستند هستیم، اما نمی‌دانیم کدام یک می‌تواند درخواست را پردازش کند.
- می‌خواهیم قادر به تعیین پردازش کننده درخواست به صورت دینامیک باشیم.

### ساختار (Structure):
الگوی زنجیره مسئولیت شامل موارد زیر است:
- `Handler`: رابط یا کلاس پایه‌ای که تعیین می‌کند چگونه درخواست را پردازش کند.
- `ConcreteHandler`: کلاس‌هایی که واقعاً درخواست را پردازش می‌کنند. هر کدام از این کلاس‌ها مسئولیت خود را بر عهده دارد و در صورت عدم توانایی در پردازش درخواست، آن را به کلاس بعدی در زنجیره ارسال می‌کند.

### شرکت‌کنندگان (Participants):
- `Handler`: رابط یا کلاس پایه‌ای که تعیین می‌کند چگونه درخواست را پردازش

کند.
- `ConcreteHandler`: کلاس‌هایی که واقعاً درخواست را پردازش می‌کنند و مسئولیت خود را بر عهده دارند.

### همکاری (Collaborations):
- هر `ConcreteHandler` در صورت عدم توانایی در پردازش درخواست، آن را به کلاس بعدی در زنجیره ارسال می‌کند. این فرآیند تا زمانی که یکی از `ConcreteHandler`ها درخواست را پردازش کند، ادامه می‌یابد.

### پیامدها (Consequences):
استفاده از الگوی زنجیره مسئولیت دارای مزایا و معایب زیر است:
- **مزایا**:
    - جدا بودن درخواست و پردازش کننده‌ها از یکدیگر.
    - امکان افزودن و حذف پردازش کننده‌ها به طور دینامیک.
    - امکان اطلاع از عدم پردازش درخواست توسط هیچ یک از پردازش کننده‌ها.

- **معایب**:
    - ممکن است درخواست به هیچ یک از پردازش کننده‌ها مرسوم نشود و بدون پردازش بماند.
    - ممکن است طولانی شدن زنجیره باعث افزایش زمان پردازش شود.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی زنجیره مسئولیت را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Handler
public abstract class Handler
{
    protected Handler _nextHandler;

    public void SetNextHandler(Handler nextHandler)
    {
        _nextHandler = nextHandler;
    }

    public abstract void HandleRequest(Request request);
}

// ConcreteHandler
public class ConcreteHandlerA : Handler
{
    public override void HandleRequest(Request request)
    {
        if (request.Type == RequestType.TypeA)
        {
            Console.WriteLine("ConcreteHandlerA is handling the request");
        }
        else if (_nextHandler != null)
        {
            _nextHandler.HandleRequest(request);
        }
    }
}

public class ConcreteHandlerB : Handler
{
    public override void HandleRequest(Request request)
    {
        if (request.Type == RequestType.TypeB)
        {
            Console.WriteLine("ConcreteHandlerB is handling the request");
        }
        else if (_nextHandler != null)
        {
            _nextHandler.HandleRequest(request

);
        }
    }
}

// Request
public class Request
{
    public RequestType Type { get; set; }
}

public enum RequestType
{
    TypeA,
    TypeB
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی زنجیره مسئولیت در پردازش رخدادها و درخواست‌ها در سیستم‌های رویدادمحور مانند سیستم‌های گزارش‌دهی، فراهم کردن دسترسی به منابع، یا سیستم‌های واسط کاربری رایج است.

### الگوهای مرتبط (Related Patterns):
- **Decorator Pattern**: Decorator Pattern برخلاف زنجیره مسئولیت، درخواست را به یک پردازش کننده مشخص می‌کند و نه یک سلسله مراتب از پردازش کننده‌ها.
- **Command Pattern**: Command Pattern مشابه زنجیره مسئولیت است اما برخلاف آن، کنترل دقیق درخواست وجود دارد و درخواست‌ها در صف انتظار قرار می‌گیرند.