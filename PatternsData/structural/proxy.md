# الگوی پروکسی (Proxy Pattern)

### همچنین شناخته شده به عنوان:
- نماینده (Representative)

### انگیزه (Motivation):
الگوی پروکسی برای ایجاد یک کلاس میانجی بین کلاس‌های دیگر استفاده می‌شود. این الگو به ما امکان می‌دهد تا یک نماینده (پروکسی) را برای دسترسی به یک شیء اصلی (سابجکت) ایجاد کنیم و کنترل دسترسی و رفتار آن را مدیریت کنیم.

### قابلیت‌استفاده (Applicability):
الگوی پروکسی وقتی مناسب است که:
- نیاز داریم تا دسترسی به یک شیء را کنترل کنیم یا تغییراتی در دسترسی به آن ایجاد کنیم.
- نیاز داریم تا عملیات‌های مربوط به مدیریت یک شیء را به کدی دیگر منتقل کنیم.
- نیاز داریم تا دسترسی به یک شیء پیچیده را از طریق یک واسط ساده‌تر ارائه کنیم.

### ساختار (Structure):
الگوی پروکسی شامل موارد زیر است:
- `Subject`: رابطی است که شیء اصلی و نماینده (پروکسی) باید از آن پیروی کنند.
- `RealSubject`: شیء اصلی که به آن دسترسی را کنترل می‌کنیم.
- `Proxy`: نماینده (پروکسی) که عملیات‌هایی مثل دسترسی به شیء اصلی را مدیریت می‌کند.

### شرکت‌کنندگان (Participants):
- `Subject`: رابطی که شیء اصلی و نماینده (پروکسی) باید از آن پیروی کنند.
- `RealSubject`: شیء اصلی که به آن دسترسی را کنترل می‌کنیم.
- `Proxy`: نماینده (پروکسی) که عملیات‌هایی مثل دسترسی به شیء اصلی را مدیریت می‌کند.

### همکاری (

Collaborations):
- `Proxy` به عنوان یک میانجی بین `Subject` و `RealSubject` عمل می‌کند. این کلاس مسئول کنترل دسترسی و اضافه کردن عملیات اضافی است.

### پیامدها (Consequences):
استفاده از الگوی پروکسی دارای مزایا و معایب زیر است:
- **مزایا**:
    - کنترل دسترسی به شیء اصلی و افزودن عملیات اضافی.
    - کاهش هزینه‌های دسترسی به شیء اصلی در صورتی که دسترسی به آن هزینه‌بر باشد.
    - جدا بودن واسط کاربری از شیء اصلی و مدیریت کردن آن توسط نماینده (پروکسی).

- **معایب**:
    - افزایش پیچیدگی در سیستم به دلیل اضافه شدن نماینده‌ها (پروکسی‌ها).
    - افزایش زمان پاسخ در صورتی که عملیات‌های مدیریتی پروکسی هزینه‌بر باشند.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی پروکسی را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Subject
public interface ISubject
{
    void Request();
}

// RealSubject
public class RealSubject : ISubject
{
    public void Request()
    {
        Console.WriteLine("RealSubject: Handling request.");
    }
}

// Proxy
public class Proxy : ISubject
{
    private readonly RealSubject _realSubject;

    public Proxy()
    {
        _realSubject = new RealSubject();
    }

    public void Request()
    {
        // Additional operations before delegating to the RealSubject
        Console.WriteLine("Proxy: Performing additional operations before calling the RealSubject.");

        // Delegating the request to the RealSubject
        _realSubject.Request();

        // Additional operations after delegating to the RealSubject
        Console.WriteLine("Proxy: Performing additional operations after calling the RealSubject.");
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی پروکسی در سیستم‌های کش وب (Web caching systems) برای ذخیره نتایج در حافظه نهان (Cache) به منظور بهبود عملکرد سیستم یک مثال است.

### الگوهای مرتبط (Related Patterns):
- **Decorator Pattern**: Decorator Pattern و پروکسی هر دو الگوهای

ی هستند که برای تغییر رفتار یک شیء استفاده می‌شوند. اما در Decorator Pattern، تعدادی دکوراتور به یک شیء اضافه می‌شوند ولی در الگوی پروکسی فقط یک نماینده (پروکسی) وجود دارد که عملیات‌های اضافی را انجام می‌دهد.
- **Adapter Pattern**: Adapter Pattern و پروکسی هر دو الگوهایی هستند که برای تعامل با یک شیء استفاده می‌شوند. اما Adapter Pattern برای تغییر و تبدیل رابط یک شیء به رابط دیگر استفاده می‌شود در حالی که پروکسی برای کنترل دسترسی و افزودن عملیات اضافی به یک شیء استفاده می‌شود.