# الگوی استیت (State Pattern)

### همچنین شناخته شده به عنوان:
- الگوی حالت (Stateful pattern)

### انگیزه (Motivation):
الگوی استیت در نرم‌افزارها استفاده می‌شود وقتی که رفتار یک شیء به وجود آمده به وضعیت‌های مختلفی بستگی دارد و در هر وضعیت، رفتار متفاوتی از خود نشان می‌دهد. با استفاده از این الگو، رفتار شیء را بر اساس وضعیت فعلی آن تعیین می‌کنیم و هر تغییر در وضعیت، رفتار شیء را تغییر می‌دهد.

### قابلیت استفاده (Applicability):
الگوی استیت وقتی مناسب است که:
- رفتار یک شیء بستگی به وضعیت فعلی آن داشته باشد.
- رفتار شیء باید به راحتی قابل توسعه و تغییر داده شود.
- از شرایط زیادی برای تعریف رفتارها بر اساس وضعیت استفاده کنیم.

### ساختار (Structure):
الگوی استیت شامل موارد زیر است:
- `Context`: کلاسی است که وضعیت‌ها را ذخیره کرده و رفتار خود را بر اساس وضعیت فعلی تعیین می‌کند.
- `State`: رابطی است که تعریف می‌کند که هر وضعیت چه رفتاری را باید انجام دهد.
- `ConcreteState`: کلاس‌هایی که وضعیت‌های مختلف را تعریف می‌کنند و رفتار شیء را در هر وضعیت مشخص می‌کنند.

### شرکت‌کنندگان (Participants):
- `Context`: کلاسی که وضعیت‌ها را ذخیره کرده و رفتار خود را بر اساس وضعیت فعلی تعیین می‌کند.
- `State`: رابطی که تعریف می‌کند که هر وضعیت چه رفتاری را باید انجام دهد.
- `ConcreteState`: کلاس‌هایی که وضعیت‌

های مختلف را تعریف می‌کنند و رفتار شیء را در هر وضعیت مشخص می‌کنند.

### همکاری (Collaborations):
- `Context` به `State` رجوع می‌کند تا رفتار خود را بر اساس وضعیت فعلی تعیین کند.
- `ConcreteState` به `Context` رجوع می‌کند تا وضعیت فعلی را تغییر دهد.

### پیامدها (Consequences):
استفاده از الگوی استیت دارای مزایا و معایب زیر است:
- **مزایا**:
    - جدا بودن رفتار شیء و وضعیت آن از هم.
    - امکان افزودن وضعیت‌های جدید به راحتی.
    - کاهش تکرار کد و افزایش خوانایی و قابلیت نگهداری برنامه.

- **معایب**:
    - افزایش تعداد کلاس‌ها و رابط‌ها در برنامه.
    - مدیریت وضعیت‌های مختلف ممکن است پیچیده شود.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی استیت را به صورت زیر پیاده‌سازی کنیم:

```csharp
// State
public interface IState
{
    void Handle();
}

// Concrete States
public class ConcreteStateA : IState
{
    public void Handle()
    {
        Console.WriteLine("ConcreteStateA is handling.");
    }
}

public class ConcreteStateB : IState
{
    public void Handle()
    {
        Console.WriteLine("ConcreteStateB is handling.");
    }
}

// Context
public class Context
{
    private IState _currentState;

    public Context()
    {
        // تنظیم وضعیت اولیه
        _currentState = new ConcreteStateA();
    }

    public void ChangeState(IState newState)
    {
        _currentState = newState;
    }

    public void Request()
    {
        _currentState.Handle();
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی استیت در سیستم‌های مدیریت وضعیت‌های گوناگون کاربران، انتقال بین صفحات در یک برنامه وب و سیستم‌های روباتیکی که بر اساس وضعیت فعلی، رفتار متفاوتی نشان می‌دهند، مثال‌هایی از استفاد

ه‌های شناخته شده این الگو هستند.

### الگوهای مرتبط (Related Patterns):
- **Strategy Pattern**: Strategy Pattern و State Pattern به نحوی مشابه هستند که در هر دو الگو رفتار یک شیء تغییر می‌کند. اما در استراتژی، تفاوت‌های بین رفتارها در زمان اجرا تعیین می‌شود، در حالی که در استیت، رفتار بر اساس وضعیت فعلی تغییر می‌کند.
- **Observer Pattern**: Observer Pattern و State Pattern در برخی موارد ممکن است به صورت همزمان استفاده شوند. Observer Pattern برای نظارت و رد و بدل داده‌ها بین شیء اصلی و Observerها استفاده می‌شود، در حالی که State Pattern برای مدیریت رفتار شیء بر اساس وضعیت استفاده می‌شود.