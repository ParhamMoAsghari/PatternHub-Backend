# الگوی مدیاتور (Mediator Pattern)

### همچنین شناخته شده به عنوان:
- توسط کننده (Controller)

### انگیزه (Motivation):
الگوی مدیاتور برای کاهش وابستگی‌های بین اجزا (components) سیستم استفاده می‌شود. وقتی که اجزا با یکدیگر ارتباط بیش از حدی دارند، ممکن است کدها پیچیده و دشوار در نگهداری و توسعه شوند. با استفاده از الگوی مدیاتور، همه‌ی ارتباطات بین اجزا از طریق یک مدیاتور مرکزی صورت می‌گیرد، که اجزا به جای ارتباط مستقیم با یکدیگر، با مدیاتور ارتباط برقرار می‌کنند.

### قابلیت‌استفاده (Applicability):
الگوی مدیاتور وقتی مناسب است که:
- اجزا سیستم باید با یکدیگر ارتباط داشته باشند و وابستگی‌های بین اجزا نباید زیاد شوند.
- تعداد زیادی اجزا در سیستم وجود دارند و مدیریت ارتباطات بین آنها پیچیده است.
- نیاز است تا اجزا بتوانند با تغییرات در ارتباطاتشان انعطاف پذیر باشند.

### ساختار (Structure):
الگوی مدیاتور شامل موارد زیر است:
- `Mediator` (مدیاتور): رابطی که متود‌هایی را برای برقراری ارتباطات بین اجزا تعریف می‌کند.
- `ConcreteMediator` (مدیاتور محکم): پیاده‌سازی مدیاتور که ارتباطات بین اجزا را مدیریت می‌کند.
- `Colleague` (همکار): رابطی که همکاران به آن وابسته‌اند و با استفاده از مدیاتور با همکاران دیگر ارتباط برقرار می‌کنند.
- `ConcreteColleague` (همکار محکم): پیاده‌سازی همکار که ارتباطات خود

را با همکاران دیگر از طریق مدیاتور برقرار می‌کند.

### شرکت‌کنندگان (Participants):
- `Mediator` (مدیاتور): رابطی که متود‌هایی را برای برقراری ارتباطات بین اجزا تعریف می‌کند.
- `ConcreteMediator` (مدیاتور محکم): پیاده‌سازی مدیاتور که ارتباطات بین اجزا را مدیریت می‌کند.
- `Colleague` (همکار): رابطی که همکاران به آن وابسته‌اند و با استفاده از مدیاتور با همکاران دیگر ارتباط برقرار می‌کنند.
- `ConcreteColleague` (همکار محکم): پیاده‌سازی همکار که ارتباطات خود را با همکاران دیگر از طریق مدیاتور برقرار می‌کند.

### همکاری (Collaborations):
- همه‌ی ارتباطات بین اجزا از طریق مدیاتور صورت می‌گیرد. همکاران با استفاده از متود‌های مدیاتور با یکدیگر ارتباط برقرار می‌کنند و مدیاتور اطلاعات و پیغام‌ها را بین همکاران منتقل می‌کند.

### پیامدها (Consequences):
استفاده از الگوی مدیاتور دارای مزایا و معایب زیر است:
- **مزایا**:
    - کاهش وابستگی‌های بین اجزا و جدا کردن آنها از جنبه‌ی ارتباطی.
    - امکان اضافه کردن و جابجایی همکاران جدید بدون تغییرات بیشتر در سیستم.
    - امکان مدیریت و کنترل بهتر ارتباطات بین اجزا.
    - افزایش قابلیت‌تست و قابلیت‌های اشتباه‌یابی در سیستم.

- **معایب**:
    - ممکن است باعث ایجاد یک مدیاتور پربار و پیچیده شود.
    - افزایش پیچیدگی کدها و مدیریت سیستم در صورتی که تعداد

زیادی همکار وجود داشته باشد.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی مدیاتور را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Mediator
public interface IMediator
{
    void SendMessage(string message, Colleague colleague);
}

// ConcreteMediator
public class ConcreteMediator : IMediator
{
    private Colleague _colleague1;
    private Colleague _colleague2;

    public Colleague Colleague1
    {
        set { _colleague1 = value; }
    }

    public Colleague Colleague2
    {
        set { _colleague2 = value; }
    }

    public void SendMessage(string message, Colleague colleague)
    {
        if (colleague == _colleague1)
        {
            _colleague2.ReceiveMessage(message);
        }
        else if (colleague == _colleague2)
        {
            _colleague1.ReceiveMessage(message);
        }
    }
}

// Colleague
public abstract class Colleague
{
    protected IMediator _mediator;

    public Colleague(IMediator mediator)
    {
        _mediator = mediator;
    }

    public virtual void SendMessage(string message)
    {
        _mediator.SendMessage(message, this);
    }

    public abstract void ReceiveMessage(string message);
}

// ConcreteColleague
public class ConcreteColleague1 : Colleague
{
    public ConcreteColleague1(IMediator mediator) : base(mediator)
    {
    }

    public override void ReceiveMessage(string message)
    {
        Console.WriteLine("ConcreteColleague1 received: " + message);
    }
}

public class ConcreteColleague2 : Colleague
{
    public ConcreteColleague2(IMediator mediator) : base(mediator)
    {
    }

    public override void ReceiveMessage(string message)
    {
        Console.WriteLine("ConcreteColleague2 received: " + message);
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
استفاده از الگوی مدیاتور در پیاده‌سازی الگوی MVC (Model-View-Controller) در فریم‌ورک‌ها و کتابخانه‌های مختلف مانند ASP.NET و WPF یک مثال است.

### الگوهای مرتبط (Related Patterns):
- **Observer Pattern**: در الگوی Observer، یک نمونه از یک همکار می‌تواند با چندین نمونه از مدیاتور در ارتباط باشد و به عنوان مشاهده‌گری عمل کند.
- **Facade Pattern**: در الگوی Facade، یک فاکاد رابطی ساده‌تر را برای کار با زیرسیستم‌های پیچیده‌تر فراهم می‌کند، در حالی که الگوی مدیاتور ارتباطات بین اجزا را مدیریت می‌کند

.